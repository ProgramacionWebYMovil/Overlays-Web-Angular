import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class LoadContentService {



  constructor(private db:FirestoreService) {

   }

  async loadContent(locationData:string){

    let finalContent;

    await this.db.getData(localStorage.getItem("language")!,locationData).then(data =>{
      finalContent = data;
    });

    return finalContent as any;
  }
}
