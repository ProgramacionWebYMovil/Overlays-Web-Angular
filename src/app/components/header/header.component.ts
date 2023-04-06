import { Component } from '@angular/core';
import { checkLogged } from 'src/app/common/tools/check-is-logged.tool';
import { Header } from 'src/app/interfaces/pagesContents.interface';
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
    window.location.reload();
  }


}

