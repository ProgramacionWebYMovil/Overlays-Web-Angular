import { Component, EventEmitter, Input, Output, NgModule } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() nPages!:number;
  @Input() cardsPerPage!:number;

  actualPage:number =1;


  nextPage(){
    let start = this.actualPage * this.cardsPerPage;
    let end = (this.actualPage * this.cardsPerPage) + this.cardsPerPage; 
    this.actualPage++;
    this.changePageEvent.emit({start,end});
    
  }

  previousPage(){
    this.actualPage--;
    let start = (this.actualPage-1) * this.cardsPerPage;
    let end = ((this.actualPage-1) * this.cardsPerPage) + this.cardsPerPage; 
    this.changePageEvent.emit({start,end});    
  }

  @Output()
  changePageEvent:EventEmitter<{start:number,end:number}> =
    new EventEmitter<{start:number,end:number}>();

  

}
