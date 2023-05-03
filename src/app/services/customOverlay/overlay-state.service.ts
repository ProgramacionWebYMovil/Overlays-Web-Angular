import { Injectable } from '@angular/core';
import { CustomOverlayService } from './custom-overlay.service';
import { Overlay } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class OverlayStateService {

  private appStateKey = 'overlayState';

  constructor(private customOverlayService:CustomOverlayService) { }

  saveAppState() {
    const overlayState = this.customOverlayService.overlay;
    if(overlayState)
    localStorage.setItem(this.appStateKey, JSON.stringify(overlayState));
  }

  restoreAppState() {
    const data = localStorage.getItem(this.appStateKey);
    if(data){
      this.customOverlayService.overlay = JSON.parse(data);
      localStorage.removeItem(this.appStateKey);
    }

  }

  setupReloadHandler() {
    window.addEventListener('beforeunload', () => this.saveAppState());
    window.addEventListener('load', () => this.restoreAppState());
  }
}


