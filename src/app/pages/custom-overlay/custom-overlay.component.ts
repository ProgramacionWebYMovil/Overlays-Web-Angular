import { Component , OnInit} from '@angular/core';
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

  constructor(
    private customOverlayService:CustomOverlayService,
    private overlayStateService:OverlayStateService
  ){
    this.overlayStateService.setupReloadHandler();
  }

  ngOnInit(){
    this.customOverlayService.overlaySubject.subscribe(newOverlay => this.overlay = newOverlay);
  }

  getDataFromDatabase(){

  }



}
