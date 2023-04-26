import { Injectable } from '@angular/core';

import { Auth, onAuthStateChanged, user } from '@angular/fire/auth';

import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut, 
  updateProfile}from 'firebase/auth';

import { Observable } from 'rxjs';
import { FirestoreService } from '../firestore/firestore.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  constructor(private auth:Auth,private firestore:FirestoreService) { }

  isLoggedInObservable(): Observable<boolean> {
    return new Observable((subscriber) => {
      onAuthStateChanged(this.auth, user => {
        subscriber.next(!!user)
      })
    })
  }

  getUidWithPromise(){
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.getCurrentUid())
      },1000);
    });
  }

  async registerUserEmail(name:string, email:string,password:string){
    await createUserWithEmailAndPassword(this.auth,email,password)
      .then(async () => {
        console.log("El usuario " + this.auth.currentUser?.uid + " se ha logueado");
        this.updateUser(name,"default");
        
      }).catch((error)=>{
        console.log(error,"El usuario no ha podido registrarse");
      });
  }

  getCurrentUid(){
      return this.auth.currentUser?.uid as string;
  }

  async logInEmail(email:string,password:string){
    await signInWithEmailAndPassword(this.auth,email,password)
      .then(() => {
        console.log("El usuario " + this.auth.currentUser?.uid + " se ha logueado");
      }).catch((error)=>{
        console.log(error,"El usuario no ha podido iniciar sesión")
      })
  }

  async logOut(){
    await signOut(this.auth).then(() =>{
      window.location.href ="";
    }).catch((error) =>{
      console.log(error);
    })
  }

  async updateUser(name:string, photoURL:string){
    updateProfile(this.auth.currentUser!, {
      displayName: name, photoURL:photoURL
    }).then(() => {
      console.log("Usuario actualizado correctamente");
      this.firestore.createSchemaUser(this.auth.currentUser as User);
    }).catch((error) => {
      console.log(error);
    })
  }

  

}
