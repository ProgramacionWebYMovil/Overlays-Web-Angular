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


  /*
  async loadContent(locationData:string){

    let finalContent;

    await this.db.getData(this.languages[this.currentLanguage],locationData).then(data =>{
      finalContent = data;
    });

    return finalContent as any;
  }*/
  async loadContent(locationData:string){
    const languageIndex = this.languages.findIndex(l => l === localStorage.getItem('language'));
    const collectionName = `PageContent${languageIndex === 0 ? 'English' : 'Spanish'}`;

    let finalContent;
    await this.db.getData(collectionName,locationData).then(data =>{
      finalContent = data;
    });
    return finalContent as any;
  }


  setCurrentLanguage(languageIndex: number) {
    this.currentLanguage = languageIndex;
    localStorage.setItem('language', this.languages[this.currentLanguage]);
  }


}
