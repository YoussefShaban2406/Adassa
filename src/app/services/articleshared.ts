import { Injectable } from '@angular/core';

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


@Injectable({
  providedIn: 'root',
})
export class Articleshared {
  selectedArticle!: SingleArticle;
}
