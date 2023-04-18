import { Injectable } from '@angular/core';

import { collection , doc  } from '@firebase/firestore';

import { Firestore , collectionData, getDoc , addDoc, getDocs, setDoc } from '@angular/fire/firestore';
import { User } from 'firebase/auth';
import { child, get, getDatabase, ref } from 'firebase/database';
import { async } from '@angular/core/testing';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) {}

 // Devuelve la colección deseada
  async getData(nameCollection : string, document:string){

    const dbRef = ref(getDatabase());
    const data = await get(child(dbRef, nameCollection+'/'+document)).then((snapshot)=> {
      return snapshot.val();
    });
    return data;

    /*const ref2 = doc(this.firestore,nameCollection,document);
    
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
      const docu = await getDoc(ref2);

      const data = docu.data();
      console.log(data);
      
      return data;
    }*/

  }

  /*setData(nameCollection:string){

    const ref = collection(this.firestore,nameCollection);

    collectionData(ref).subscribe(data =>{
      console.log(data);

    })

    const hola = {abc:"hola"}
    //addDoc();

  }*/

  /*METODO PARA CREAR EL ESQUEMA DE UN USUARIO, SE LLAMA CUANDO UN USUARIO SE REGISTRA*/
  async createSchemaUser(user:User){
    let uid = user.uid;
    await setDoc(doc(this.firestore,"Users",uid!),{
      userName:user.displayName,
      userEmail:user.email,
      userPhoto:user.photoURL
    });



  }

  deleteShemaUser(user:User){
    console.log(user);
  }

}

