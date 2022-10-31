import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-form-page',
  templateUrl: './article-form-page.component.html',
  styleUrls: ['./article-form-page.component.scss'],
})
export class ArticleFormPageComponent implements OnInit {
  thumbnailPreview = 'assets/images/article-default.jpg';
  constructor() {}

  ngOnInit(): void {
    console.log();
  }

  handleSubmit() {}

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
