import { Component } from '@angular/core';
import { Header } from 'src/app/interfaces/pagesContents.interface';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { PageContentService } from 'src/app/services/page-content/page-content.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {

  pepe:Header = {

  };

  constructor(private tool:PageContentService,private db:FirestoreService){

    this.db.getData("PageContentEnglish","header").then(data =>{
      const pepe2 =this.tool.setTextData(data!,this.pepe);
      this.pepe = pepe2 as Header ;
      console.log(this.pepe);

    });


  }



}
