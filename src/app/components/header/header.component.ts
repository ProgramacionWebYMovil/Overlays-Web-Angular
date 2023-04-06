import { Component } from '@angular/core';
import { Header } from 'src/app/interfaces/pagesContents.interface';
import { checkLogged } from 'src/app/services/check-is-logged/check-is-logged.service';
import { LoadContentService } from 'src/app/services/load-content/load-content.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {

  pageContent:Header = {

  };

  isLogged: boolean;

  constructor(private load:LoadContentService){
    this.isLogged = checkLogged();
  }

  ngOnInit(){
    this.load.loadContent("header").then(data =>this.pageContent=data);
  }


  logOut(){
    sessionStorage.setItem("logged","false");
  }


}

