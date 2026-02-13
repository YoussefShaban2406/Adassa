import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { NgClass } from '@angular/common';
import { ArticlesComponent } from "../articles/articles.component";

@Component({
  selector: 'app-blog',
  imports: [ArticlesComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  currentCategory = 0;
  @ViewChildren('articleCategory') articleCategory!: QueryList<ElementRef>;  
  ngAfterViewInit(){
    this.articleCategory.forEach((element) => {
      (element.nativeElement as HTMLElement).addEventListener('click', () => {
        this.articleCategory.forEach((el) => {
          el.nativeElement.classList.remove('article-categories-active');
        })
        this.currentCategory = +element.nativeElement.getAttribute('aria-label');
        element.nativeElement.classList.add('article-categories-active');
      });
    })
   }

}
