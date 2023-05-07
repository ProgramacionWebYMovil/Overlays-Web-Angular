import { Injectable, OnInit } from '@angular/core';
import { Overlays } from 'src/app/interfaces/overlays.interface';
import { AuthenticationService } from '../authentication/authentication.service';
import { FirestoreService } from '../firestore/firestore.service';
import { Observable, Subject, Subscriber } from 'rxjs';
import { OverlayFirestoreService } from '../firestore/overlay-firestore.service';

@Injectable({
  providedIn: 'root'
})
export class CustomOverlayService{


  private subject = new Subject<{overlay:Overlays,overlayData:any}>();

  private currentOverlay: Overlays;
  private _overlayData: any;


  constructor(
    private auth:AuthenticationService,
    private firestoreService:FirestoreService,
    private overlayFirestoreService:OverlayFirestoreService
    ){
    this.currentOverlay = {
      id:0,
      type:"",
      urlID:0,
      userID:"",
      font:"",
      name:""
    }

    this.auth.getUidObservable().subscribe(uid =>{
      this.currentOverlay.userID = uid;
    })
  }

  public get overlayData(): any {
    return this._overlayData;
  }
  public set overlayData(value: any) {
    this._overlayData = value;
  }

  get overlay():Overlays{
    return this.currentOverlay;
  }
  get overlaySubject(): Subject<{overlay:Overlays,overlayData:any}>{
    return this.subject;
  }

  set overlay(overlay:Overlays){
    this.currentOverlay = overlay;
    this.updateData();
  }

  set overlayUrlId(urlID:number){
    console.log(urlID);

    this.currentOverlay.urlID = urlID;
    this.loadRemainingOverlay();
  }
  restartData(data: { overlayState: Overlays; overlayDataState:any; }) {
    this._overlayData = data.overlayDataState;
    this.currentOverlay = data.overlayState;
    this.loadRemainingOverlay();
    this.updateData();

  }

  private loadRemainingOverlay(){

    this.overlayFirestoreService
    .readOverlayInfo(this.auth.getCurrentUid(),this.overlay.urlID).then(response => {
      console.log("HOLA" +response);

      this.currentOverlay = response as Overlays;
      console.log(this.currentOverlay);

      this.updateData();
    })

    // this.firestoreService.getMyOverlays(this.auth.getCurrentUid()).then(data =>{
    //   if(data.length != 0){
    //     const sortedOverlays = this.sortOverlays(data);
    //     this.currentOverlay = sortedOverlays[this.currentOverlay.urlID-1] as Overlays;;
    //     this.updateData();
    //   }
    // })
  }

  private updateData(){
    console.log(this.currentOverlay);
    this.subject.next({
      overlay:this.currentOverlay,
      overlayData:this._overlayData
    });
  }

  private sortOverlays(overlays:any[]){
    return overlays.sort((a, b) => a.urlID - b.urlID);
  }

}
