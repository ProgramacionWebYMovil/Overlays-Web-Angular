import { Component } from '@angular/core';
import { Header } from 'src/app/interfaces/pagesContents.interface';
import { checkLogged } from 'src/app/services/check-is-logged/check-is-logged.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {

  pageContent:Header = {

  };

  isLogged: boolean;

  constructor(private db:FirestoreService){
    this.loadContent();
    sessionStorage.setItem("logged","true");
    this.isLogged = checkLogged();

  }


  private loadContent(){
    this.db.getData("PageContentEnglish","header").then(data =>{
      this.pageContent = data as Header ;
    });
  }

  logOut(){
    sessionStorage.setItem("logged","false");
  }


}

