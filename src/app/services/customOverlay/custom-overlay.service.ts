import { Injectable } from '@angular/core';
import { Overlays } from 'src/app/interfaces/overlays.interface';
import { AuthenticationService } from '../authentication/authentication.service';
import { FirestoreService } from '../firestore/firestore.service';
import { Observable, Subject, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomOverlayService {

  private subject = new Subject<Overlays>();

  private currentOverlay: Overlays;

  constructor(
    private auth:AuthenticationService,
    private firestoreService:FirestoreService
    ){
    this.currentOverlay = {
      id:0,
      type:"",
      urlID:0,
      userID:this.auth.getCurrentUid(),
      font:"",
      name:""
    }
  }

  get overlay():Overlays{
    return this.currentOverlay;
  }
  get overlaySubject(): Subject<Overlays>{
    return this.subject;
  }

  set overlay(overlay:Overlays){
    this.currentOverlay = overlay;
    this.subject.next(this.currentOverlay);
  }

  set overlayUrlId(urlID:number){
    this.currentOverlay.urlID = urlID;
    this.loadRemainingOverlay();
  }

  private loadRemainingOverlay(){

    this.firestoreService.getMyOverlays(this.auth.getCurrentUid()).then(data =>{

      this.currentOverlay = data[this.currentOverlay.urlID-1] as Overlays;
      this.subject.next(this.currentOverlay);
      console.log(this.currentOverlay);
    })

  }


}
