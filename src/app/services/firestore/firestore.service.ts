import { Injectable } from '@angular/core';

import { DocumentData, collection , doc  } from '@firebase/firestore';

import { Firestore , collectionData, getDoc , addDoc, getDocs, setDoc, updateDoc, increment, Timestamp} from '@angular/fire/firestore';
import { User } from 'firebase/auth';
import { child, get, getDatabase, ref, DatabaseReference } from 'firebase/database';
import { Database } from '@angular/fire/database';
import { OverlayFootball } from 'src/app/interfaces/overlays.interface';


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
    const nextId = await this.nextIdOverlay(userID);
    const docRef = doc(this.firestore,"Users",userID,"Overlays","Overlay " + (nextId +1));
    
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

}

