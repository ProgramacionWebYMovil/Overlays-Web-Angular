import { Component } from '@angular/core';
import { LoadContentService } from 'src/app/services/load-content/load-content.service';

@Component({
  selector: 'app-overlays',
  templateUrl: './overlays.component.html',
  styleUrls: ['./overlays.component.css']
})
export class OverlaysComponent {
  
  //Todos los Overlays demo
  overlays!: any[];

  //Los overlays que salen actualmente en la página
  actualOverlays!: any[];

  //Variable para dar paso al binding de app-paginación
  paginationReady:boolean=false;

  constructor(private loadContent:LoadContentService){ }

  ngOnInit(){
    
    this.loadContent.loadDemoOverlays().then(data => {
      this.overlays = data;
      this.fillOverlays(0,this.getCardsPerPage());
      this.paginationReady = true;
    });
      
  }

  fillOverlays(start:number, end:number):void {
    if(this.overlays.length < end)  end = this.overlays.length;
    this.actualOverlays = [];
    for(let i=start,  j = 0; i<end; i++ ,j++){
      this.actualOverlays[j] = this.overlays[i];
    }
  }

  
  getnumberOfPages():number {
    let nPages = this.overlays.length / this.getCardsPerPage();
    if(nPages % 1 != 0){
      nPages = Math.trunc(nPages);
      nPages++;
    } 
    return nPages;
  }

  getCardsPerPage():number {
    return window.innerWidth>=1250 ?  8 : 4;
  }

  //METODO LLAMADO POR APP-PAGINATION
  changePage(startEnd:{start:number,end:number}):void{
    this.fillOverlays(startEnd.start,startEnd.end);
    
  }

}


