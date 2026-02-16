import { Component, inject, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-article',
  imports: [RouterLink],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})
export class ArticleComponent {
  @Input({ required: true }) article!: any;
  @Input({ required: true }) index!: number;
}
