import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Articleshared } from '../../services/articleshared';


@Component({
  selector: 'app-read-article',
  imports: [RouterLink],
  templateUrl: './read-article.component.html',
  styleUrl: './read-article.component.css',
})
export class ReadArticleComponent {
  articleService = inject(Articleshared);
  article!: any;
  constructor() { 
    this.article = this.articleService.selectedArticle;
  }
}
