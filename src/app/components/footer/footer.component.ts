import { Component, OnInit } from '@angular/core';
import { object } from '@angular/fire/database';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {


  pageContent = {
    title_explore:"",
    text_overlays:"",
    text_howToUse:"",
    text_home:"",
    text_pricing:"",

    //Follow section
    title_follow:"",
    text_instagram:"",
    text_youtube:"",
    text_tiktok:"",
    text_facebook:"",

    //Form section
    title_form:"",
    text_email:"",
    text_name:"",
    text_message:""
  }

  constructor (private db:FirestoreService){}

  ngOnInit() {
    console.log();
    
    let language = localStorage.getItem('language')!;
    
    this.db.getData(language,"footer").then(data=> this.setTextData(data!));
  }

  private setTextData(data: object) {

      for (let [key,value] of Object.entries(data)){
        this.pageContent[key as keyof typeof this.pageContent]=value;
      }
  }
}
