import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, doc, onSnapshot } from '@angular/fire/firestore';
import { updateDoc } from 'firebase/firestore';
import { OverlayFootball } from 'src/app/interfaces/overlays.interface';
import { AuthenticationService } from '../authentication/authentication.service';
import { CustomOverlayService } from '../customOverlay/custom-overlay.service';

@Injectable({
  providedIn: 'root'
})
export class OverlayFirestoreService {

  public datos!:Observable<any>;

  constructor(
    private firestore:Firestore,
    private auth:AuthenticationService,
    private customOverlayService:CustomOverlayService
  ) {  }

  async createSuscribe(userID:string,urlID:number){
    this.datos = new Observable(observer => {
      let datos;
      onSnapshot(doc(this.firestore,"Users",userID,"Overlays","Overlay "+urlID,"Data","score"), (doc) => {
        datos = doc.data();
        observer.next(datos);
      });

    });
  }

  public suscribeOverlay():Observable<any> {
    return this.datos;
  }

  async writeOverlay(data:any){
    const ref =
    doc(
      this.firestore,
      "Users",
      this.auth.getCurrentUid(),
      "Overlays",
      "Overlay "+this.customOverlayService.overlay.urlID,
      "Data",
      "score"
    );
    await updateDoc(ref,{
      ...data
    });
  }

}
