import { Injectable } from '@angular/core';

import { collection , doc  } from '@firebase/firestore';

import { Firestore , collectionData, getDoc , addDoc } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) {
   }

 // Devuelve la colección deseada
  async getData(nameCollection : string, document:string){

    const ref = doc(this.firestore,nameCollection,document);
    
    const docu = await getDoc(ref);
    const data = docu.data();
    return data;

  }

  /*setData(nameCollection:string){

    const ref = collection(this.firestore,nameCollection);

    collectionData(ref).subscribe(data =>{
      console.log(data);

    })

    const hola = {abc:"hola"}
    //addDoc();

  }*/

}
