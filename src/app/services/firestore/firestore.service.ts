import { Injectable } from '@angular/core';

import { collection , doc  } from '@firebase/firestore';

import { Firestore , collectionData, getDoc , addDoc, getDocs } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) {
   }

 // Devuelve la colección deseada
  async getData(nameCollection : string, document:string){

    const ref = doc(this.firestore,nameCollection,document);
    
    if(document=="all"){
      //BLOQUE IF QUE HE INSERTADO PARA COGER TODOS LOS DOCUMENTOS
      const querySnapshot = await getDocs(collection(this.firestore,nameCollection));
      let docus = new Array(querySnapshot.size);
      
      let index = 0;
      querySnapshot.forEach((doc) => {
        docus[index] = doc.data();
        index++;
      })
      console.log(docus[0].description);
      
      return docus;

    }else{
      //BLOQUE QUE HABIA ANTES PARA COGER UN DOCUMENTO
      const docu = await getDoc(ref);

      const data = docu.data();
      return data;
    }

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
