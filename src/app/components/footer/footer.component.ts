import { Component, OnInit } from '@angular/core';
import { object } from '@angular/fire/database';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {


  pepe = {
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

  //Explore section
  /*title_explore: string = "";
  text_explore1: string = "";
  text_explore2: string = "";
  text_explore3: string = "";
  text_explore4: string = "";

  //Follow section
  title_follow: string = "";
  text_instagram: string = "";
  text_youtube: string = "";
  text_tiktok: string = "";
  text_facebook: string = "";

  //Form section
  title_form: string = "";
  text_email: string = "";
  text_name: string = "";
  text_message: string = "";*/

  constructor (private db:FirestoreService){}

  ngOnInit() {
    console.log();
    
    let language = localStorage.getItem('language')!;
    
    this.db.getData(language,"footer").then(data=> this.setTextData(data!));
  }

  private setTextData(data: object) {

      for (const [key,value] of Object.entries(data)){
        console.log(value,key);
        this.pepe = value; 
      }
      console.log(typeof data)
      this.pepe!=data;
      
  }
}
