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

  //Actual page
  actualPage: number=1;
  nPages!:number;

  constructor(private db:FirestoreService){ }

  ngOnInit(){
    let language = localStorage.getItem('language');

    if(language=="PageContentSpanish"){
      this.db.getData("demoOverlaysSpanish","all")
        .then(data => {  
          this.overlays = data as any[];
          this.nPages = pageCalculator(this.overlays.length);
          selectOverlays();
        });
    }else{
      this.db.getData("demoOverlaysEnglish","all")
        .then(data => {  
          this.overlays = data as any[];
          this.nPages = pageCalculator(this.overlays.length);
        });
    }

    /*Funcion para seleccionar los overlays
    * que saldrán en la pagina actual */
    function selectOverlays(){
      
    }
          
  }
  
  

  


}

function pageCalculator(overlaysLength: number): number {
  let cardsPerPage;
  window.innerWidth>=1250 ? cardsPerPage = 8 : cardsPerPage = 4;
  let nPages = overlaysLength / cardsPerPage;
  if(nPages % 1 != 0){
    nPages = Math.trunc(nPages);
    nPages++;
  } 
  return nPages;
}
