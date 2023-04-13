import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Session } from 'src/app/interfaces/pagesContents.interface';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { LoadContentService } from 'src/app/services/load-content/load-content.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent {
  pageContent:Session = {}

  sessionOption:boolean;


  constructor(private load:LoadContentService,
    private activeRoute:ActivatedRoute,
    private authentication:AuthenticationService) {
    this.sessionOption = this.checkSessionOption();
  }

  ngOnInit(){
    this.load.loadContent("session").then(data=> this.pageContent=data);
    this.checkSessionStatus();
   
  }
  checkSessionOption() {
    return this.activeRoute.snapshot.params['sessionOption'] == "login" ? false:true;
  }



  changeSessionOption(){
    this.sessionOption = !this.sessionOption;
  }

  checkSessionStatus(){
    //console.log(this.authentication.getCurrentUid(),this.authentication.checkLogged(),);

    //if(this.authentication.checkLogged()) window.location.href = "";
  }

  async submit(){
    (!this.sessionOption ? await this.authentication.logInEmail("jpereiro1@gmail.com","pepe12345678")
    : await this.authentication.registerUserEmail("jpereiro1@gmail.com","pepe12345678"));
    sessionStorage.setItem("logged","true");
    //window.location.href = "";
    this.checkSessionStatus();
  }

  logOut(){
    this.authentication.logOut();
  }
}
