import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input({required:true}) isStatsNone!:Boolean;
  @Input({required:true}) isHomeBtnNone!:Boolean;
  @Input() headerBadge!:String;
  @Input() speacialHeaderH1!:String;
  @Input() startHeaderH1!:String;
  @Input() endHeaderH1!:String;
  @Input() headerMainParag!:String;
  @Input() HomeBtnOne!:String;
  @Input() HomeBtnTwo!:String;
}
