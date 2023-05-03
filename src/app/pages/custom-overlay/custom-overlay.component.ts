import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Overlays } from 'src/app/interfaces/overlays.interface';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { CustomOverlayService } from 'src/app/services/customOverlay/custom-overlay.service';
import { OverlayStateService } from 'src/app/services/customOverlay/overlay-state.service';

@Component({
  selector: 'app-custom-overlay',
  templateUrl: './custom-overlay.component.html',
  styleUrls: ['./custom-overlay.component.css']
})
export class CustomOverlayComponent  implements OnInit{


  overlay!: Overlays;

  constructor(
    private customOverlayService:CustomOverlayService,
    private router:Router,
    private overlayStateService:OverlayStateService
  ){
    this.overlayStateService.setupReloadHandler();
  }

  ngOnInit(){
    this.overlay = this.customOverlayService.overlay;
  }

  getDataFromDatabase(){


  }



}
