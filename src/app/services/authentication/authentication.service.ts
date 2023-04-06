import { Injectable } from '@angular/core';

import { getAuth,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword } from 'firebase/auth'; 

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  auth:any;
  constructor() { 
    this.auth = getAuth();
  }

  registerUserEmail(email:string,password:string){
    createUserWithEmailAndPassword(this.auth,email,password)
      .then(userCredential => {
        //Signed in
        const user = userCredential.user;
      }).catch((error)=>{
        console.log("El usuario no ha podido registrarse");
      });
  }

  logInEmail(email:string,password:string){
    signInWithEmailAndPassword(this.auth,email,password)
      .then((userCredential) => {
        const user = userCredential.user;
      }).catch((error)=>{
        console.log("El usuario no ha podido iniciar seción")
      })
  }




}
