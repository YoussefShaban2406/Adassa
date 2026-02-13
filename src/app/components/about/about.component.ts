import { Component, inject } from '@angular/core';
import { Posts } from '../../services/posts';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  data = inject(Posts);

}
