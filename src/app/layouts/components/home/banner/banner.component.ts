import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  adultsCount: number = 1; // Default: 1 adult
  childrenCount: number = 0; // Default: 0 children
  roomsCount: number = 1;

}
