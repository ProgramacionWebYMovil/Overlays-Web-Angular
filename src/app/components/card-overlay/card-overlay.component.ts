import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-overlay',
  templateUrl: './card-overlay.component.html',
  styleUrls: ['./card-overlay.component.css']
})
export class CardOverlayComponent {
  //@Input() overlay_name!: string;
  //@Input() overlay_description!: string;
  //@Input() overlay_image!: string;
  @Input() overlay:any;
  buttonShow!: boolean;
  ngOnInit(){
    /*Compruebo que el padre es overlays o myOverlays
    * para poder eliminar o mostrar el boton de usar*/
    window.location.pathname == "/myOverlays" ? this.buttonShow=false : this.buttonShow=true; 
  }

  useButton(): void {
    //SI NO ESTA EL USUARIO REGISTRADO, LO MANDA A REGISTRARSE
    
    //SI ESTA REGISTRADO, LO MANDA A EDIT OVERLAY

  }
}
