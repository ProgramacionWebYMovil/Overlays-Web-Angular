import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-card-overlay',
  templateUrl: './card-overlay.component.html',
  styleUrls: ['./card-overlay.component.css']
})
export class CardOverlayComponent {

  @Input() overlay:any;
  buttonShow!: boolean;

  constructor(private auth:AuthenticationService,
              private route: Router,
              private firestore: FirestoreService){}

  ngOnInit(){
    /*Compruebo que el padre es overlays o myOverlays
    * para poder eliminar o mostrar el boton de usar*/
    window.location.pathname == "/myOverlays" ? this.buttonShow=false : this.buttonShow=true; 
  }

  useButton(): void {
    if(this.auth.getCurrentUid()===undefined){
      //SI NO ESTA EL USUARIO REGISTRADO, LO MANDA A REGISTRARSE
      this.route.navigate(['session',this.overlay.overlayType]);
    }else{
      //SI ESTA REGISTRADO, LO MANDA A EDIT OVERLAY

      //this.route.navigate();
      console.log(this.overlay.overlayType);
      this.firestore.createOverlay(this.auth.getCurrentUid())
    }
    

  }
}
