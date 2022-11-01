import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { ArticleService } from 'src/app/core/services/article.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { WriterService } from 'src/app/core/services/writer.service';

@Component({
  selector: 'app-article-form-page',
  templateUrl: './article-form-page.component.html',
  styleUrls: ['./article-form-page.component.scss'],
})
export class ArticleFormPageComponent implements OnInit {
  thumbnailPreview = 'assets/images/article-default.jpg';
  articleForm!: FormGroup;
  isEdit = false;
  article: any;
  articleId: number = -1;
  isFetching = false;
  username: string | null = null;
  constructor(
    private writerService: WriterService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(map((params: Params) => params['articleId']))
      .subscribe((articleId) => {
        this.articleId = articleId;
        if (articleId) {
          this.isEdit = true;
          this.fetchArticle();
        } else this.initForm();
      });
    this.route.queryParamMap
      .pipe(map((params) => params.get('username')))
      .subscribe((username) => (this.username = username));
  }

  handleSubmit() {
    console.log(this.articleForm.value);
    this.isFetching = true;
    this.writerService
      .createArticle(
        this.getValue('title'),
        this.getValue('image'),
        this.getValue('shortDesc'),
        this.getValue('content')
      )
      .subscribe({
        next: () => {
          this.isFetching = false;
          this.toast.showSuccess(
            'Create article successfull',
            'Thanks for contribute new article!'
          );
          localStorage.removeItem('draft');
          setTimeout(
            () => this.router.navigate(['writer', this.username, 'articles']),
            1000
          );
        },
        error: () => {
          this.isFetching = false;
        },
      });
  }
  test(event: any) {
    console.log(event);
  }
  handleChangeImage(image: any) {
    console.log(image);
    URL.revokeObjectURL(this.thumbnailPreview);
    this.articleForm.get('image')?.setValue(image.target.files[0]);
    this.thumbnailPreview = URL.createObjectURL(image.target.files[0]);
  }
  storeDraftInLocal() {
    const draft = {
      title: this.getValue('title'),
      image: this.getValue('image'),
      shortDesc: this.getValue('shortDesc'),
      content: this.getValue('content'),
      imagePreview: this.thumbnailPreview,
    };
    localStorage.setItem('draft', JSON.stringify(draft));
  }
  retrieveDraftFormLocal() {
    const draft = localStorage.getItem('draft');
    if (draft) return JSON.parse(draft);
    return null;
  }
  private initForm() {
    let title = null;
    let image = null;
    let shortDesc = null;
    let content = null;
    if (this.isEdit) {
      const draft = this.retrieveDraftFormLocal();
      if (draft) {
        title = draft.title;
        this.thumbnailPreview = draft.imagePreview;
        shortDesc = draft.shortDesc;
        content = draft.content;
        image = draft.image;
      } else {
        title = this.article.title;
        this.thumbnailPreview = this.article.image;
        shortDesc = this.article.shortDescription;
        content = this.article.content;
      }
    }
    this.articleForm = this.fb.group({
      title: [title, [Validators.required]],
      image: [image, [Validators.required]],
      shortDesc: [shortDesc, [Validators.required]],
      content: [content, [Validators.required]],
    });
  }
  private fetchArticle() {
    this.isFetching = true;
    this.articleService.getDetail(this.articleId).subscribe((article) => {
      this.article = { ...article };
      this.isFetching = false;
      this.initForm();
    });
  }
  private getValue(field: string) {
    return this.articleForm.get(field)?.value;
  }
  summernoteConfig = {
    placeholder: 'Article content',
    height: 400,
    toolbar: [
      ['misc', ['undo', 'redo']],
      [
        'font',
        [
          'bold',
          'italic',
          'underline',
          'strikethrough',
          'superscript',
          'subscript',
          'clear',
        ],
      ],
      ['fontsize', ['fontname', 'fontsize']],
      ['para', ['ul', 'ol', 'paragraph', 'height']],
      ['insert', ['picture', 'link']],
      ['view', ['fullscreen', 'codeview', 'help']],
    ],
    fontSizes: ['20', '28'],
    fontNames: ['Roboto', 'Open Sans', 'Inter', 'Comic Sans MS'],
    fontNamesIgnoreCheck: ['Open Sans'],
  };
}
