import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { Posts } from '../../services/posts';
import { Articleshared } from '../../services/articleshared';

export interface SingleArticle {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  author: Author
  image: string
  date: string
  readTime: string
  featured: boolean
  tags: string[]
}

export interface Author {
  name: string
  avatar: string
  role: string
}

@Component({
  selector: 'app-article',
  imports: [RouterLink],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})
export class ArticleComponent {
  data = inject(Posts);
  articleService = inject(Articleshared);
  @Input({ required: true }) article!: any;
  @Input({ required: true }) index!: number;
  @Input({ required: true }) itemID!: number;

  currentItem!:SingleArticle;
  currentItemID!: any;

  onElemntClick(event: PointerEvent): void {
    this.currentItemID = (event.currentTarget as HTMLElement).getAttribute('aria-label');
    (this.currentItem) = this.data.postsArray.posts.find(p => p.id === Number(this.currentItemID)!) as SingleArticle
    this.articleService.selectedArticle = this.currentItem;
  }
}
