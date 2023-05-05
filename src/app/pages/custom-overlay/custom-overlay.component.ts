import { AfterContentChecked, AfterViewChecked, Component , OnInit} from '@angular/core';
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
export class CustomOverlayComponent  implements AfterContentChecked{


  overlay: Overlays = this.customOverlayService.overlay;
  overlayData:any = this.customOverlayService.overlayData;
  urlView: string = ""

  constructor(
    private customOverlayService:CustomOverlayService,
    private overlayStateService:OverlayStateService,
    private _snackBar:MatSnackBar
  ){
    this.overlayStateService.setupReloadHandler();
  }



  //CUANDO SE HABRA EL EDIT OVERLAY POR PRIMARA VEZ, LLAMAME A timeStampOverlay() para kenai
  ngAfterContentChecked(){
    this.customOverlayService.overlaySubject.subscribe(newOverlay => {
      this.overlay = newOverlay.overlay;
      this.overlayData = newOverlay.overlayData;
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
