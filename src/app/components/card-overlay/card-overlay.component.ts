import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { IMAGE_OVERLAY } from '../overlays/overlays-common';

@Component({
  selector: 'app-card-overlay',
  templateUrl: './card-overlay.component.html',
  styleUrls: ['./card-overlay.component.css']
})
export class CardOverlayComponent {

  @Input() overlay:any;
  @Input() language!: number;
  buttonShow!: boolean;

  buttonsText!:string[];

  @Output() deleteOverlay = new EventEmitter<number>();

  constructor(private auth:AuthenticationService,
              private route: Router,
              private firestore: FirestoreService){}

  ngOnInit(){
    /*Compruebo que el padre es overlays o myOverlays
    * para poder eliminar o mostrar el boton de usar*/
    window.location.pathname == "/myOverlays" ? this.buttonShow=false : this.buttonShow=true;
    if(this.overlay.image===undefined){      
      this.overlay.image = IMAGE_OVERLAY[this.overlay.id-1];
    }

    if(this.language===0){
      this.buttonsText = ["Use overlay","Edit information","Delete overlay"];
    } else{
      this.buttonsText = ["Usar el overlay","Editar información","Borrar el overlay"];
    }


     
  }

  async useButton() {
    if(this.auth.getCurrentUid()===undefined){
      //SI NO ESTA EL USUARIO REGISTRADO, LO MANDA A REGISTRARSE
      this.route.navigate(['session',this.overlay.overlayID]);
    }else{
      //SI ESTA REGISTRADO, LO MANDA A EDIT OVERLAY
      const nextId = await this.firestore.createOverlay(this.overlay,this.auth.getCurrentUid());
      //this.route.navigate(['edit',this.auth.getCurrentUid(),nextId]);
      
    }
  }

  delete(){
    console.log("Hola");
  }

  actionEvent($event:any){
    
    
    switch($event){
      case "use":
        this.route.navigate(['edit',this.overlay.userID,this.overlay.urlID])
        break;
      case "edit":

        break;
      case "delete":
        this.firestore.deleteOverlay(this.overlay.userID,this.overlay.urlID);
        //Opcion 1: recargar la pagina despues de borrar el elemento
        //Opcion 2: borrar el cardOverlay, para ello habrá que llamar al padre
        this.deleteOverlay.emit(this.overlay.urlID);
        break;
    }
  }
}
