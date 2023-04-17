import { Injectable} from '@angular/core';
import { FirestoreService } from '../firestore/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class LoadContentService {

  private currentLanguage:number;
  private languages:string[];



  constructor(private db:FirestoreService) {
    this.languages = ["PageContentEnglish","PageContentSpanish"];
    this.currentLanguage = localStorage.getItem("language") == "PageContentEnglish"? 0:1;
    console.log(this.currentLanguage);

  }

  changeLanguage(){
    this.currentLanguage = -this.currentLanguage + 1;
    localStorage.setItem("language",this.languages[this.currentLanguage]);
  }



  async loadContent(locationData:string){

    let finalContent;

    await this.db.getData(this.languages[this.currentLanguage],locationData).then(data =>{
      finalContent = data;
    });

    return finalContent as any;
  }

  async loadDemoOverlays(){

    let finalContent;

    let language = localStorage.getItem('language');
    let colection;
    language == "PageContentSpanish" ?
      colection = "demoOverlaysSpanish":
      colection = "demoOverlaysEnglish";

    await this.db.getData(colection,"all").then( data => {
      finalContent = data;
    });

    return finalContent as any;
  }
}
