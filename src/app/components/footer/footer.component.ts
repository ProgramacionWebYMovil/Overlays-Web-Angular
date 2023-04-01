import { Component, OnInit } from '@angular/core';
import { object } from '@angular/fire/database';



import { Footer } from 'src/app/interfaces/pagesContents.interface';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { PageContentService } from 'src/app/services/page-content/page-content.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {


  pageContent:Footer = {

  }

  constructor (private db:FirestoreService, private tool: PageContentService){}

  ngOnInit() {
    console.log();
    
    let language = localStorage.getItem('language')!;
    
    this.db.getData(language,"footer").then(data=> this.tool.setTextData(data!,this.pageContent));

  }

  private setTextData(data: object) {

      for (let [key,value] of Object.entries(data)){
        this.pageContent[key as keyof typeof this.pageContent]=value;
      }
  }
}
