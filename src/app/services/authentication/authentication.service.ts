import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Auth, onAuthStateChanged, user } from '@angular/fire/auth';
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile}from 'firebase/auth';
import { Observable } from 'rxjs';
import { FirestoreService } from '../firestore/firestore.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  currentUser$: Observable<string | null> = this.currentUserSubject.asObservable();

  constructor(private auth:Auth,private firestore:FirestoreService,private router:Router) {
    this.initCurrentUser();
  }

  isLoggedInObservable(): Observable<boolean> {
    return new Observable((subscriber) => {
      onAuthStateChanged(this.auth, user => {
        subscriber.next(!!user)
      })
    })
  }

  async getUidWithPromise(){
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.getCurrentUid())
        console.log(this.getCurrentUid())
      },6000);
    });
  }


  getCurrentUid(){
      return this.auth.currentUser?.uid as string;
  }

  async logOut(){
    await signOut(this.auth).then(() =>{
      this.router.navigate(['']);
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

  getUidObservable(): Observable<string> {

    return new Observable((subscriber) => {
      subscriber.next(this.auth.currentUser?.uid);
    });
  }
  private initCurrentUser() {
    this.auth.onAuthStateChanged((user: User | null) => {
      const uid = user ? user.uid : null;
      this.currentUserSubject.next(uid);
    });
  }

  getCurrentUid2(): string | null {
    return this.currentUserSubject.value;
  }

  async getUserData(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const unsubscribe = onAuthStateChanged(this.auth, async (user: User | null) => {
        unsubscribe();

        if (user) {
          const uid = user.uid;
          const userData = await this.firestore.getUser(uid);
          console.log('User Data:', userData);
          resolve(userData);
        } else {
          console.log('No user logged in');
          resolve(null);
        }
      });
    });
  }

  async registerUserEmail(name: string, email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then(async () => {
        console.log("El usuario " + this.auth.currentUser?.uid + " se ha registrado");
        this.updateUser(name, "default");
        return Promise.resolve(true);
      })
      .catch((error) => {
        console.log(error, "El usuario no ha podido registrarse");
        return Promise.resolve(false);
      });
  }

  async logInEmail(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        console.log("El usuario " + this.auth.currentUser?.uid + " se ha logueado");
        return Promise.resolve(true);
      })
      .catch((error) => {
        console.log(error, "El usuario no ha podido iniciar sesión");
        return Promise.resolve(false);
      });
  }


}
