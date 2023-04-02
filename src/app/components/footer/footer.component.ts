import { Component, OnInit } from '@angular/core';
import { Footer } from 'src/app/interfaces/pagesContents.interface';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { setTextData } from 'src/app/services/page-content/page-content.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {


  pageContent:Footer = {

  }

  constructor (private db:FirestoreService){}

  ngOnInit() {

    let language = localStorage.getItem('language')!;

    this.db.getData(language,"footer").then(data=> this.pageContent = setTextData(data!,this.pageContent));

  }

}
