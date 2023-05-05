import { Component , OnInit} from '@angular/core';
import { domain } from 'src/app/common/constants';
import { Overlays } from 'src/app/interfaces/overlays.interface';
import { CustomOverlayService } from 'src/app/services/customOverlay/custom-overlay.service';
import { OverlayStateService } from 'src/app/services/customOverlay/overlay-state.service';
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-custom-overlay',
  templateUrl: './custom-overlay.component.html',
  styleUrls: ['./custom-overlay.component.css']
})
export class CustomOverlayComponent  implements OnInit{


  overlay: Overlays = this.customOverlayService.overlay;
  urlView: string = ""

  constructor(
    private customOverlayService:CustomOverlayService,
    private overlayStateService:OverlayStateService,
    private _snackBar:MatSnackBar
  ){
    this.overlayStateService.setupReloadHandler();
  }


  //CUANDO SE HABRA EL EDIT OVERLAY POR PRIMARA VEZ, LLAMAME A timeStampOverlay() para kenai
  ngOnInit(){
    this.customOverlayService.overlaySubject.subscribe(newOverlay => {
      this.overlay = newOverlay;
      this.urlView = domain+"/view/"+this.overlay.userID+"/"+this.overlay.urlID;
    });
    
    
  }

  getDataFromDatabase(){

  }

  openSnackBar(){
    this._snackBar.open("Copiado en el portapapeles","Cerrar", {
      panelClass: ['snack-custom'],
      duration:3000
    });
  }



}
