import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Posts } from '../../services/posts';
import { ArticleComponent } from "../article/article.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-home',
  imports: [RouterLink, ArticleComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  readonly data = inject(Posts);

  headerBadge = 'مرحباً بك في عدسة';
  speacialHeaderH1 = 'فن';
  startHeaderH1 = 'اكتشف';
  endHeaderH1 = 'التصوير الفوتوغرافي';
  headerMainParag = 'انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.';
  HomeBtnOne = 'استكشف المقالات';
  HomeBtnTwo = 'أعرف المزيد';


}
