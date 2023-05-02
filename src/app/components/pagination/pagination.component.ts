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


  /*Función llamada por el padre my-overlays despues de borrar un overlay
   * se usa el ViewChild en el padre
   * se le pasa por parametro el numero de overlays y el decidirá si hay que cambiar de página o no
   * 
   * El metodo funciona de la siguiente manera:
   *    -Cuando se borra el ultimo overlay de la pagina actual, mueve una pagina atras 
   *    -Si se borra el ultimo overlay de la primera pagina, no hace nada
  */    
  postDeleteAction(overlaysLength:number){
    if(overlaysLength===0){
      this.actualPage=0;
      this.changePageEvent.emit({start:0,end:0});
      return;
    } 
    if((this.actualPage-1)*this.cardsPerPage===overlaysLength){
      this.previousPage();
      return;
    }else{
      let start = (this.actualPage-1)*this.cardsPerPage;
      let end = ((this.actualPage-1)*this.cardsPerPage) + this.cardsPerPage;
      this.changePageEvent.emit({start,end});
      return;
    }
  }

}
