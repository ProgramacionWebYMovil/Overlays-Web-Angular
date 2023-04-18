import { Injectable} from '@angular/core';
import { FirestoreService } from '../firestore/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class LoadContentService {

  /* currentLanguage: number
   * 0 = ingles
   * 1 = español */
  private currentLanguage:number;
  private languages:string[];



  constructor(private db:FirestoreService) {
    this.languages = ["PageContentEnglish","PageContentSpanish"];
    this.currentLanguage = localStorage.getItem("language") == "PageContentEnglish"? 0:1;
    console.log(this.currentLanguage);

  }

  getCurrentLanguage():number{
    return this.currentLanguage;
  }

  changeLanguage(){
    this.currentLanguage = -this.currentLanguage + 1;
    localStorage.setItem("language",this.languages[this.currentLanguage]);
  }



  async loadContent(locationData:string){

    let finalContent;

    await this.db.getData(this.languages[this.currentLanguage],locationData).then(data =>{
      finalContent = data;
      console.log(finalContent);
      
    });

    return finalContent as any;
  }
}
