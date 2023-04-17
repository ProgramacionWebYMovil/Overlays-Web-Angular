import { Component } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Header } from 'src/app/interfaces/pagesContents.interface';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { LoadContentService } from 'src/app/services/load-content/load-content.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {

  pageContent:Header;

  isLoggedIn$: Observable<boolean>;

  constructor
  (private load:LoadContentService
  ,private auth:AuthenticationService){
    this.isLoggedIn$ = this.auth.isLoggedInObservable();
    this.pageContent={}
  }

  ngOnInit(){
    this.load.loadContent("header").then(data =>this.pageContent=data);
  }

  async logOut(){
    await this.auth.logOut();
  }

  changeLanguage(){
    this.load.changeLanguage();
    window.location.reload();
  }

}

