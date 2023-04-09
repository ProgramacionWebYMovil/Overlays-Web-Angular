import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent {
  isFreeOpen = false;
  isPremiumOpen = false;

  constructor(private router: Router) {}
  irAPagina() {
    this.router.navigate(['./payment']);
    console.log()
  }
}


