import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Index } from 'src/app/interfaces/pagesContents.interface';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { LoadContentService } from 'src/app/services/load-content/load-content.service';
import { setTextData } from 'src/app/services/page-content/page-content.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  pageContent:Index = {}

  constructor (private loadContent:LoadContentService){}

  ngOnInit(){
    this.loadContent.loadContent("index").then(data =>{
      this.pageContent = data;
    });
    
    
  }

}
