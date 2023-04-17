import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore/firestore.service';
import { LoadContentService } from '../load-content/load-content.service';

@Injectable({
  providedIn: 'root'
})
export class OverlaysService {

  //Todos los Overlays demo
  overlays!: any[];

  //Los overlays que salen actualmente en la página
  actualOverlays!: any[];

  constructor(private db: FirestoreService,
              private loadContent:LoadContentService) { }

  async loadDemoOverlays(){
    let colection = this.loadContent.getCurrentLanguage() === 1 ? "demoOverlaysSpanish" : "demoOverlaysEnglish";

    await this.db.getData(colection,"all").then( data => {
      this.overlays = data as any;
    });
  }

  fillOverlays(start:number, end:number):any {
    if(this.overlays.length < end)  end = this.overlays.length;
    this.actualOverlays = [];
    for(let i=start,  j = 0; i<end; i++ ,j++){
      this.actualOverlays[j] = this.overlays[i];
    }
    return this.actualOverlays;
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
    return innerWidth>=1250 ?  8 : 4;
  }

  //Metodo que te da el siguiente id de los overlays del usuario
  getNextOverlayID():number{
    return 0;
  }

}
