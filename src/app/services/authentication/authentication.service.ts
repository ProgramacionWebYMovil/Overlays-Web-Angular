import { Injectable } from '@angular/core';

import { Auth, onAuthStateChanged } from '@angular/fire/auth';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut, 
  updateProfile}from 'firebase/auth';

import { Observable } from 'rxjs';
import { FirestoreService } from '../firestore/firestore.service';
import { update } from 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private auth:Auth,
              private firestore:FirestoreService) {}

  isLoggedInObservable(): Observable<boolean> {
    return new Observable((subscriber) => {
      onAuthStateChanged(this.auth, user => {
        subscriber.next(!!user)
      })
    })
  }

  async registerUserEmail(name:string, email:string,password:string){
    await createUserWithEmailAndPassword(this.auth,email,password)
      .then(() => {
        console.log("El usuario " + this.auth.currentUser?.uid + " se ha logueado");
        this.updateUser(name,"default")
        this.firestore.createSchemaUser(this.auth.currentUser as any);
      }).catch((error)=>{
        console.log(error);

        console.log(error,"El usuario no ha podido registrarse");
      });
  }

  getCurrentUid(){
    return this.auth.currentUser?.uid;
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

  updateUser(name:string, photoURL:string){
    updateProfile(this.auth.currentUser!, {
      displayName: name, photoURL:photoURL
    }).then(() => {
      console.log("Usuario actualizado correctamente");
    }).catch((error) => {
      console.log(error);
    })
  }

  

}
