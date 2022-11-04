import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map } from 'rxjs';
import { ArticleService } from 'src/app/core/services/article.service';
import { ImageService } from 'src/app/core/services/image.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { WriterService } from 'src/app/core/services/writer.service';

@Component({
  selector: 'app-article-form-page',
  templateUrl: './article-form-page.component.html',
  styleUrls: ['./article-form-page.component.scss'],
})
export class ArticleFormPageComponent implements OnInit {
  thumbnailPreview = this.imageService.default;
  articleForm!: FormGroup;
  isEdit = false;
  article: any;
  articleId: number = -1;
  isFetching = false;

  constructor(
    private writerService: WriterService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService,
    private toast: ToastService,
    private title: Title,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Writer new aritcle');

    this.route.params
      .pipe(map((params: Params) => params['articleId']))
      .subscribe((articleId) => {
        this.articleId = articleId;
        if (articleId) {
          this.isEdit = true;
          this.title.setTitle('Edit your aritcle');
          this.fetchArticle();
        } else this.initForm();
      });
  }

  handleSubmit() {
    console.log(this.articleForm.value);
    this.isFetching = true;
    if (this.isEdit) this.updateArticle();
    else this.createArticle();
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

  getValue(field: string) {
    return this.articleForm.get(field)?.value;
  }
  private updateArticle() {
    this.writerService
      .updateArticle(
        this.articleId,
        this.getValue('title'),
        this.getValue('image'),
        this.getValue('shortDesc'),
        this.getValue('content')
      )
      .subscribe({
        next: () => {
          this.isFetching = false;
          this.toast.showSuccess('Update article successfull', '');
          localStorage.removeItem('draft');
          this.writerService.loadFormLocal();
          this.router.navigate(['/writer/articles']);
        },
        error: () => {
          this.isFetching = false;
        },
      });
  }
  private createArticle() {
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
          this.writerService.loadFormLocal();
          this.router.navigate(['/writer/articles']);
        },
        error: () => {
          this.isFetching = false;
        },
      });
  }
  private initForm() {
    let title = null;
    let image = null;
    let shortDesc = null;
    let content = null;

    if (this.isEdit) {
      title = this.article.title;
      shortDesc = this.article.shortDesc;
      content = this.article.content;
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

  summernoteConfig = {
    stripTags: true,
    spellCheck: false,
    placeholder: 'Article content',

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
