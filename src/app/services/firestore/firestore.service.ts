import { Injectable } from '@angular/core';

import { DocumentData, collection , deleteDoc, doc  } from '@firebase/firestore';

import { Firestore , collectionData, getDoc , addDoc, getDocs, setDoc, updateDoc, increment, Timestamp} from '@angular/fire/firestore';
import { User } from 'firebase/auth';
import { child, get, getDatabase, ref, DatabaseReference } from 'firebase/database';
import { Database } from '@angular/fire/database';
import { OverlayFootball } from 'src/app/interfaces/overlays.interface';
import { onSnapshot } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { FootballOverlay1Default, ID, TYPE, TennisOverlay1Default, TimerOverlat1Default } from 'src/app/components/overlays/overlays-common';
import { Basketball1Component } from 'src/app/components/overlays/overlay-basketball/basketball1/basketball1.component';
import { Overlay } from '@angular/cdk/overlay';


@Injectable({
  providedIn: 'root'
})

export class FirestoreService {

  constructor(private firestore: Firestore, private realTime:Database) { 
  }

 // Devuelve la colección deseada
  async getData(nameCollection : string, document:string){
    
    const dbRef = ref(this.realTime);
    const data = await get(child(dbRef, nameCollection+'/'+document)).then((snapshot)=> {
      return snapshot.val();
    });
    return data;
  }

  async getOverlaysDemo(nameCollection:string){    
    const dbRef = ref(this.realTime);
    const data = await get(child(dbRef,nameCollection)).then((snapshot => {
      return snapshot.val();
    }));

    let overlays = [];
    let index = 0;
    for(var i in data){
      overlays[index] = data[i];
      index++;
    }
    return overlays;
  }

  async getMyOverlays(user:string){
    const querySnapshot = await getDocs(collection(this.firestore,"Users/"+user+"/Overlays"));

    let overlays: DocumentData[] = [];
    let index = 0;
  
    querySnapshot.forEach((doc) => {
      overlays[index] = doc.data();
      index++;
    });
    
    return overlays;
  }

  /*METODO PARA CREAR EL ESQUEMA DE UN USUARIO, SE LLAMA CUANDO UN USUARIO SE REGISTRA*/
  async createSchemaUser(user:User){
    let uid = user.uid;
    const ref = doc(this.firestore,"Users",uid);
    await setDoc(ref,{
      userName:user.displayName,
      userEmail:user.email,
      userPhoto:user.photoURL,
      countOverlay:0
    });
    /*Advertencia: Si borras un documento, no se borrarán las subcolecciones que contiene.
    Cuando borras un documento que tiene subcolecciones, estas no se borran. Por ejemplo, 
    puede haber un documento ubicado en coll/doc/subcoll/subdoc, aunque el documento coll/doc
    ya no exista. Si deseas borrar los documentos de las subcolecciones cuando borras un documento
    principal, debes hacerlo de forma manual, como se muestra en la sección Borra colecciones.*/
  }

  deleteShemaUser(user:User){
    console.log(user);
  }

  async createOverlay(overlay:any, userID:string){
    const nextId = await this.nextIdOverlay(userID)+1;
    const docRef = doc(this.firestore,"Users",userID,"Overlays","Overlay " + nextId);
    
    /*Insertamos el documento y su información
    *   -id: es el identificador del overlay
    *   -urlID: es el número de overlay que es en el esquema del usuario
    *   -userID: el identificador de usuario
    *   -type: el tipo de overlay en cuestión
    */
    await setDoc(docRef,{
      id:overlay.overlayID,
      name:overlay.name,
      description:overlay.description,
      urlID:nextId,
      userID:userID,
      type:overlay.type,
      date:Timestamp.now()
    });


    /*Escribir en la base de datos los valores por predeterminado de cada overlay*/
    const docRefScore = doc(this.firestore,"Users",userID,"Overlays","Overlay " + nextId, "Data","score");
    let document;
    /*SWITCH CON TIPO DE OVERLAY*/
    switch(overlay.type){
      //TIPO FUTBOL
      case TYPE.FOOTBALL:
        //DISTINTOS OVERLAYS DE FOOTBALL
        switch(overlay.overlayID){
          case ID.FOOTBALL_1_ID:
            document = new FootballOverlay1Default();
            break;
        }
        break;
      case TYPE.BASKETBALL:
        switch(overlay.overlayID){
          case ID.BASKETBALL_1_ID:
            document = new Basketball1Component();
            break;
        }
        break;
      case TYPE.TENNIS:
        switch(overlay.overlayID){
          case ID.TENNIS_1_ID:
            document = new TennisOverlay1Default();
            break;
        }
        break;
      case TYPE.TIMER:
        switch(overlay.overlayID){
          case ID.TIMER_1_ID:
            document = new TimerOverlat1Default();
            break;
        }
        break;

    }
    
    await setDoc(docRefScore,{
      ...document
    });

    return nextId;
  }

  async nextIdOverlay(userID:string){
    const docRef = doc(this.firestore,"Users",userID);
    const docSnap = await getDoc(docRef).then((data)=> {
      return data.data();
    });
    
    await updateDoc(docRef,{
      countOverlay:increment(1)
    });
    return docSnap!['countOverlay'];


  }

  async deleteOverlay(userId:string, urlId:number){
    await deleteDoc(doc(this.firestore,"Users",userId,"Overlays","Overlay "+urlId));
    
  }

  changeOverlaysDetails(userID:string,urlID:number,data:any){
    updateDoc(doc(this.firestore,"Users",userID,"Overlays","Overlay "+urlID),{
      name:data.resultado1,
      description:data.resultado2
    });
  }

  

}

