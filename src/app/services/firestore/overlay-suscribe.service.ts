import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, doc, onSnapshot } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OverlaySuscribeService {

  public datos!:Observable<any>;

  constructor(private firestore:Firestore) { 
    
  }

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

}
