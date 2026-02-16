import { Component, ElementRef, inject, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Posts } from '../../services/posts';

export enum Categories {
  All,
  Light,
  portrait,
  Sights,
  Tech,
  Appliances
};

type articleSectionView = 'Grid' | 'List';

@Component({
  selector: 'app-articles',
  imports: [],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css',
})
export class ArticlesComponent {
  data = inject(Posts);
  @Input({ required: true }) categ!: Number;
  @Input({ required: true }) categLength!: Number;
  Categories = Categories;

  articlesection = true;
  articleSectionLine = false;
  flag = true

  onSetView(view: articleSectionView){
    if(view === 'Grid'){
      this.articlesection = true;
      this.articleSectionLine = false;
      this.flag = true;
    }
    else{
      this.articlesection = false;
      this.articleSectionLine = true;
      this.flag = false;
    }
  }
}
