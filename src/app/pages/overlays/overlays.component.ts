import { Component } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

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


  constructor(private db:FirestoreService){ }

  ngOnInit(){
    let language = localStorage.getItem('language');
    let colection;
    language == "PageContentSpanish" ? 
      colection = "demoOverlaysSpanish":
      colection = "demoOverlaysEnglish";
    
    this.db.getData(colection,"all").then(data => {
      this.overlays = data as any[];
      this.fillOverlays(0,this.getCardsPerPage());
    })
      
  }

  fillOverlays(start:number, end:number):void {
    if(this.overlays.length < end)  end = this.overlays.length;
    this.actualOverlays = [];
    for(let i=start,  j = 0; i<end; i++ ,j++){
      this.actualOverlays[j] = this.overlays[i];
    }
  }

  //Dara fallo hasta que los overlays se carguen
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

  changePage(startEnd:{start:number,end:number}):void{
    this.fillOverlays(startEnd.start,startEnd.end);
    
  }

}


