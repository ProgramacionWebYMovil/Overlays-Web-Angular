import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OverlayFootball } from 'src/app/interfaces/overlays.interface';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { OverlaySuscribeService } from 'src/app/services/firestore/overlay-suscribe.service';

@Component({
  selector: 'app-overlay-football',
  templateUrl: './overlay-football.component.html',
  styleUrls: ['./overlay-football.component.css']
})
export class OverlayFootballComponent {
  constructor (private db:OverlaySuscribeService){}


  datos!:OverlayFootball;


  async ngOnInit(){
    //Hay que suscribir la escucha a la base de datos
    //https://firebase.google.com/docs/firestore/query-data/listen?hl=es-419
    await this.db.createSuscribe("ZfKbuQCO24Ugy5cZYzEwiTARpyV2",10);
    this.db.suscribeOverlay().subscribe(datos => {
      this.datos = datos;
    });
    
  }

  ngOnDestroy(){
    //Hay que desuscribir la escucha de la base de datos
  }
}
