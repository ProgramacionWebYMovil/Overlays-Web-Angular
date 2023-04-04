import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Index } from 'src/app/interfaces/pagesContents.interface';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { setTextData } from 'src/app/services/page-content/page-content.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  pageContent:Index = {}

  constructor (private db:FirestoreService){}

  ngOnInit(){

    let language = localStorage.getItem('language')!;

    this.db.getData(language,"index").then(data=> {
      this.pageContent=setTextData(data!,this.pageContent)
    });
    
  }

}
