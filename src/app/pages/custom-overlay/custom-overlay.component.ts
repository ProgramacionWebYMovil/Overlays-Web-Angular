import { Component , OnInit} from '@angular/core';
import { domain } from 'src/app/common/constants';
import { Overlays } from 'src/app/interfaces/overlays.interface';
import { CustomOverlayService } from 'src/app/services/customOverlay/custom-overlay.service';
import { OverlayStateService } from 'src/app/services/customOverlay/overlay-state.service';


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
  ){
    this.overlayStateService.setupReloadHandler();
  }

  ngOnInit(){
    this.customOverlayService.overlaySubject.subscribe(newOverlay => {
      this.overlay = newOverlay
      //Hay que cambiar esto a una constante para otro lado
      this.urlView = domain+"/view/"+this.overlay.userID+"/"+this.overlay.urlID;
    });
    
    
  }

  getDataFromDatabase(){

  }



}
