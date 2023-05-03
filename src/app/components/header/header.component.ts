import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Header } from 'src/app/interfaces/pagesContents.interface';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { LoadContentService } from 'src/app/services/load-content/load-content.service';
import { SessionOptionService } from 'src/app/services/sessionOption/session-option.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {

  pageContent:Header;

  isLoggedIn$: Observable<boolean>;

  languages = [
    { value: 'es', label: 'ES' },
    { value: 'en', label: 'EN' }
  ];

  selectedLanguage: string = '';


  constructor(
    private load:LoadContentService,
    private auth:AuthenticationService,
    private sessionOptionService:SessionOptionService

  ){
    this.isLoggedIn$ = this.auth.isLoggedInObservable();
    this.pageContent={}
  }

  ngOnInit(){
    this.load.loadContent('header').then(data => {
      this.pageContent = data;
    });
    this.selectedLanguage = 'null';
  }

  async logOut(){
    await this.auth.logOut();
  }

  changeLanguage(){
    if(this.selectedLanguage === 'es'){
      this.load.setCurrentLanguage(1);
    } else if(this.selectedLanguage === 'en'){
      this.load.setCurrentLanguage(0);
    }
    window.location.reload();
  }

  selectSessionOption(value:boolean){
    this.sessionOptionService.sessionOptionValue = value;
  }

}

