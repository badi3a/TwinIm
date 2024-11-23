import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  searchQuery: string ;
  minPrice: number ;
  maxPrice: number  ;
  available: string ;
  errorMsg: string ;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.searchQuery);
  }

  navigateToList() {

    if (this.minPrice > this.maxPrice) {
      this.errorMsg = "maxPrice must be greater than minPrice";
      return;
    }

    this.router.navigate(['/announcement/list'], {
      queryParams: {
        searchQuery: this.searchQuery,
        minPrice: this.minPrice,
        maxPrice: this.maxPrice,
        available: this.available
      }
    });
  }
}
