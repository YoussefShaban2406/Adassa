import { Component, inject } from '@angular/core';
import {  RouterLink } from "@angular/router";
import { Posts } from '../../services/posts';

@Component({
  selector: 'app-footer',
  imports: [ RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  data = inject(Posts);

}
