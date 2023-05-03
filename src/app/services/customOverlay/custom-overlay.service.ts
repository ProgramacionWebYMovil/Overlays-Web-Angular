import { Injectable } from '@angular/core';
import { Overlays } from 'src/app/interfaces/overlays.interface';
import { AuthenticationService } from '../authentication/authentication.service';
import { FirestoreService } from '../firestore/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class CustomOverlayService {

  private currentOverlay: Overlays;

  constructor(
    private auth:AuthenticationService,
    private firestoreService:FirestoreService
    ){
    this.currentOverlay = {
      id:0,
      type:"",
      urlId:0,
      userId:this.auth.getCurrentUid(),
      font:"",
      name:""
    }
  }

  get overlay(){
    return this.currentOverlay;
  }

  set overlay(overlay:Overlays){
    this.currentOverlay = overlay;
    console.log(this.currentOverlay);
  }

  set overlayUrlId(urlId:number){
    this.currentOverlay.urlId = urlId;
    this.loadRemainingOverlay();
  }

  private loadRemainingOverlay(){

    this.firestoreService.getMyOverlays(this.auth.getCurrentUid()).then(data =>{

      this.currentOverlay = data[this.currentOverlay.urlId-1] as Overlays;
      console.log(this.currentOverlay);
    })

  }


}
