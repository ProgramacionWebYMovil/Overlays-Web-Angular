import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, doc, onSnapshot } from '@angular/fire/firestore';
import { Timestamp, collection, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { OverlayFootball } from 'src/app/interfaces/overlays.interface';
import { AuthenticationService } from '../authentication/authentication.service';
import { CustomOverlayService } from '../customOverlay/custom-overlay.service';
import { get } from 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class OverlayFirestoreService {

  public datos!:Observable<any>;
  private currentUrlID = 0;

  constructor(
    private firestore:Firestore,
    private auth:AuthenticationService,
  ) {  }

  async createSuscribe(userID:string,urlID:number){
    //Crea la suscribcion si no está creada, si ya estaba creada retorna vacio
    if(this.currentUrlID!==urlID){
      this.datos = new Observable(observer => {
        let datos;
        onSnapshot(doc(this.firestore,"Users",userID,"Overlays","Overlay "+urlID,"Data","score"), (doc) => {
          datos = doc.data();
          observer.next(datos);
        });
        return datos;
      });
    }else{
      return;
    }

  }

  public suscribeOverlay():Observable<any> {
    return this.datos;
  }

  async writeOverlay(data:any,urlId:number){
    const ref =
    doc(
      this.firestore,
      "Users",
      this.auth.getCurrentUid(),
      "Overlays",
      "Overlay "+urlId,
      "Data",
      "score"
    );
    await updateDoc(ref,{
      ...data
    });
  }

  // async readOverlayData(userID:string,urlID:number){
  //   const ref =
  //   doc(
  //     this.firestore,
  //     "Users",
  //     userID,
  //     "Overlays",
  //     "Overlay "+urlID,
  //     "Data",
  //     "score"
  //   );
  //   const result = await getDoc(ref);
  //   return result.data();
  // }

  async readOverlayInfo(userID:string,urlID:number){

    const ref = doc(this.firestore,
      "Users",
      userID,
      "Overlays",
      "Overlay "+urlID
      );
    const result = await getDoc(ref);

    console.log(result);


    return result.data();
  }

  timeStampOverlay(urlId:number){
    const ref = doc(this.firestore,
      "Users",
      this.auth.getCurrentUid(),
      "Overlays",
      "Overlay "+urlId);

      updateDoc(ref, {
        date: Timestamp.now()
      });
  }






}
