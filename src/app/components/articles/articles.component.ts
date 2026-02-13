import { Component, inject, Input} from '@angular/core';
import { Posts } from '../../services/posts';

export enum Categories {
    All,
    Light,
    portrait,
    Sights,
    Tech,
    Appliances
  };

@Component({
  selector: 'app-articles',
  imports: [],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css',
})
export class ArticlesComponent {
  data = inject(Posts);
  @Input({required:true}) categ!:Number;
  Categories = Categories;

}
