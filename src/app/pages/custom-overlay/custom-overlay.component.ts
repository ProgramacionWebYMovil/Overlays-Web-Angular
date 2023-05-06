import { AfterContentChecked, AfterViewChecked, Component , OnDestroy, OnInit} from '@angular/core';
import { domain } from 'src/app/common/constants';
import { Overlays } from 'src/app/interfaces/overlays.interface';
import { CustomOverlayService } from 'src/app/services/customOverlay/custom-overlay.service';
import { OverlayStateService } from 'src/app/services/customOverlay/overlay-state.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { OverlayFirestoreService } from 'src/app/services/firestore/overlay-firestore.service';



@Component({
  selector: 'app-custom-overlay',
  templateUrl: './custom-overlay.component.html',
  styleUrls: ['./custom-overlay.component.css']
})
export class CustomOverlayComponent  implements AfterContentChecked,OnDestroy{


  overlay: Overlays = this.customOverlayService.overlay;
  overlayData:any = this.customOverlayService.overlayData;
  urlView: string = ""

  constructor(
    private customOverlayService:CustomOverlayService,
    private overlayStateService:OverlayStateService,
    private _snackBar:MatSnackBar,
    private overlayFirestoreService:OverlayFirestoreService
  ){
    this.overlayStateService.setupReloadHandler();
    addEventListener('beforeunload',() => this.overlayFirestoreService.timeStampOverlay(this.customOverlayService.overlay.urlID))
  }


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

  ngOnDestroy(){

  }
}
