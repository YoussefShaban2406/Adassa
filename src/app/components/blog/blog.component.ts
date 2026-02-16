import { Component, ElementRef, inject, QueryList, ViewChildren } from '@angular/core';
import { NgClass } from '@angular/common';
import { ArticlesComponent } from "../articles/articles.component";
import { Posts } from '../../services/posts';

@Component({
  selector: 'app-blog',
  imports: [ArticlesComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  data = inject(Posts);
  currentCategory = 0;
  currentCategoryLength: number = this.data.postsArray.posts.length;
  @ViewChildren('articleCategory') articleCategory!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.articleCategory.forEach((element) => {
      (element.nativeElement as HTMLElement).addEventListener('click', () => {
        this.articleCategory.forEach((el) => {
          el.nativeElement.classList.remove('article-categories-active');
        })
        this.currentCategory = +element.nativeElement.getAttribute('aria-label');
        this.categorySelectionLength(this.currentCategory);
        element.nativeElement.classList.add('article-categories-active');
      });
    })
  }

  categorySelectionLength(category: number) {
    let filteredPosts: any[] = [];
    switch (category) {
      case 0:
        this.currentCategoryLength = this.data.postsArray.posts.length;
        break;
      case 1:
        filteredPosts = this.data.postsArray.posts.filter(
          (el) => el.category === 'إضاءة'
        );
        this.currentCategoryLength = filteredPosts.length;
        break;
      case 2:
        filteredPosts = this.data.postsArray.posts.filter(
          (el) => el.category === 'بورتريه'
        );
        this.currentCategoryLength = filteredPosts.length;
        break;
      case 3:
        filteredPosts = this.data.postsArray.posts.filter(
          (el) => el.category === 'مناظر طبيعية'
        );
        this.currentCategoryLength = filteredPosts.length;
        break;
      case 4:
        filteredPosts = this.data.postsArray.posts.filter(
          (el) => el.category === 'تقنيات'
        );
        this.currentCategoryLength = filteredPosts.length;
        break;
      case 5:
        filteredPosts = this.data.postsArray.posts.filter(
          (el) => el.category === 'معدات'
        );
        this.currentCategoryLength = filteredPosts.length;
        break;
    }
  }

}
