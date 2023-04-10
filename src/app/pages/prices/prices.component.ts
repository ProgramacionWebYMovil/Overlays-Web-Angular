import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadContentService } from 'src/app/services/load-content/load-content.service';
import { Prices } from 'src/app/interfaces/pagesContents.interface';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent {
  pageContent:Prices = {}
  isFreeOpen = false;
  isPremiumOpen = false;

  constructor(private load:LoadContentService, private router: Router) {}

  ngOnInit(){
    this.load.loadContent("prices").then(data=> this.pageContent=data);
  }

  irAPagina() {
    this.router.navigate(['./payment']);
    console.log()
  }
}


