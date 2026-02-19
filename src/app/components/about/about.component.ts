import { Component, inject } from '@angular/core';
import { Posts } from '../../services/posts';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-about',
  imports: [HeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  data = inject(Posts);
  headerBadge = 'مدونتنا';
  speacialHeaderH1 = 'مقالاتنا';
  startHeaderH1 = 'استكشف';
  endHeaderH1 = 'التصوير الفوتوغرافي';
  headerMainParag = 'اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث';

}
