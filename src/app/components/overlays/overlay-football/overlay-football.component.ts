import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor (private db:OverlaySuscribeService,
               private router:ActivatedRoute){}


  datos!:OverlayFootball;


  async ngOnInit(){
    const snapshot = this.router.snapshot;
    if(snapshot.routeConfig?.path==='edit'){
      //Lo de kenai

    }else{
      await this.db.createSuscribe(snapshot.params[0],snapshot.params[1]);
      this.db.suscribeOverlay().subscribe(datos => {
      this.datos = datos;
    });
    }
    
    
  }

  ngOnDestroy(){
    //Hay que desuscribir la escucha de la base de datos
  }
}
