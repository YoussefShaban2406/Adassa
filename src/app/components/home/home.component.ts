import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Posts } from '../../services/posts';
import { ArticleComponent } from "../article/article.component";

@Component({
  selector: 'app-home',
  imports: [RouterLink, ArticleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  readonly data = inject(Posts);
}
