import { Injectable } from '@angular/core';
import { CustomOverlayService } from './custom-overlay.service';
import { OverlayFootball, Overlays } from 'src/app/interfaces/overlays.interface';

@Injectable({
  providedIn: 'root'
})
export class OverlayStateService {

  private appStateKey = 'overlayState';

  constructor(private customOverlayService:CustomOverlayService) {
    window.addEventListener('load', () => {
      console.log("CARGADO");

    },false);
    this.restoreAppState();
  }

  private saveAppState() {
    console.log("Guardando datos");

    const temp={
      overlayState: this.customOverlayService.overlay,
      overlayDataState : this.customOverlayService.overlayData
    }
    localStorage.setItem(this.appStateKey, JSON.stringify(temp));
  }

  private restoreAppState() {

    if(!this.customOverlayService.overlay.userID){
      const temp = localStorage.getItem(this.appStateKey);
      if(temp){
        this.restoreDataToOverlay(JSON.parse(temp));
        localStorage.removeItem(this.appStateKey);
      }
    }

  }

  private restoreDataToOverlay(data:{overlayState:Overlays,overlayDataState:OverlayFootball}){
    this.customOverlayService.restartData(data);
  }

  setupReloadHandler() {

    console.log("Asignando eventos...");
    console.log("Segunda Marca" + Date.now());

    window.addEventListener('DOMContentLoaded', () => {
      console.log("CARGADO");

    },false);



    window.addEventListener('beforeunload', () => this.saveAppState());

  }
}



