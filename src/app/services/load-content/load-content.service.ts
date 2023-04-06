import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore/firestore.service';
import { setTextData } from 'src/app/common/tools/page-content.tool';

@Injectable({
  providedIn: 'root'
})
export class LoadContentService {

  constructor(private db:FirestoreService) { }

  async loadContent(locationData:string,storage:object){



    await this.db.getData(localStorage.getItem("language")!,locationData).then(data =>{
      //this.pageContent = data as Header ;
      let a;

      a = setTextData(data!,storage);

      console.log(typeof data);

      return data as any;



    });


  }
}
