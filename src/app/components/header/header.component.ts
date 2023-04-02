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

  pageContent:Header = {

  };

  isLogged: boolean;

  constructor(private tool:PageContentService,private db:FirestoreService){
    this.loadContent();
    this.isLogged = checkLogged();
  }


  private loadContent(){
    this.db.getData("PageContentEnglish","header").then(data =>{
      const pepe2 =this.tool.setTextData(data!,this.pageContent);
      this.pageContent = pepe2 as Header ;
      console.log(this.pageContent);

    });
  }

  logOut(){
    sessionStorage.setItem("logged","false");
  }


}
function checkLogged(): boolean {
  let logged = sessionStorage.getItem("logged")=="true" ? true :  false;
  return logged;
}

