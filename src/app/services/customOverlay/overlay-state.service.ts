import { Injectable } from '@angular/core';
import { CustomOverlayService } from './custom-overlay.service';
import { Overlay } from '@angular/cdk/overlay';
import { OverlayFootball, Overlays } from 'src/app/interfaces/overlays.interface';

@Injectable({
  providedIn: 'root'
})
export class OverlayStateService {

  private appStateKey = 'overlayState';

  constructor(private customOverlayService:CustomOverlayService) { }

  saveAppState() {
    const temp={
      overlayState: this.customOverlayService.overlay,
      overlayDataState : this.customOverlayService.overlayData
    }
    localStorage.setItem(this.appStateKey, JSON.stringify(temp));
  }

  restoreAppState() {
    const temp = localStorage.getItem(this.appStateKey);

    if(temp){
      this.restoreDataToOverlay(JSON.parse(temp));
      //localStorage.removeItem(this.appStateKey);
    }

  }

  private restoreDataToOverlay(data:{overlayState:Overlays,overlayDataState:OverlayFootball}){
    this.customOverlayService.restartData(data);
  }

  setupReloadHandler() {
    window.addEventListener('beforeunload', () => this.saveAppState());
    window.addEventListener('load', () => this.restoreAppState());
  }
}


