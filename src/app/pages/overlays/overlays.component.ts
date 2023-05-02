import { Component } from '@angular/core';
import { OverlaysService } from 'src/app/services/overlays/overlays.service';

@Component({
  selector: 'app-overlays',
  templateUrl: './overlays.component.html',
  styleUrls: ['./overlays.component.css']
})
export class OverlaysComponent {

  //Todos los Overlays demo
  overlays!: any[];


  //Variable para dar paso al binding de app-paginación
  paginationReady:boolean=false;

  constructor(public loadContent:OverlaysService){ }

  ngOnInit(){

    this.loadContent.loadDemoOverlays().then( data =>{
      this.overlays = this.loadContent.fillOverlays(0,this.loadContent.getCardsPerPage());
      this.paginationReady = true;
    });

  }

  //METODO LLAMADO POR APP-PAGINATION
  changePage(startEnd:{start:number,end:number}):void{
    this.overlays = this.loadContent.fillOverlays(startEnd.start,startEnd.end);
  }

}


