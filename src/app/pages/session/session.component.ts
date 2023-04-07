import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { checkLogged } from 'src/app/common/tools/check-is-logged.tool';
import { Session } from 'src/app/interfaces/pagesContents.interface';
import { LoadContentService } from 'src/app/services/load-content/load-content.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent {
  pageContent:Session = {}

  sessionOption:boolean;


  constructor(private load:LoadContentService,private activeRoute:ActivatedRoute) {
    this.sessionOption = this.checkSessionOption();
  }
  checkSessionOption() {
    return this.activeRoute.snapshot.params['sessionOption'] == "login" ? false:true;
  }

  ngOnInit(){
    this.load.loadContent("session").then(data=> this.pageContent=data);
    this.checkSessionStatus();
  }

  changeSessionOption(){
    this.sessionOption = !this.sessionOption;
  }

  checkSessionStatus(){
    if(checkLogged()) window.location.href = "";
  }

  submit(){
    sessionStorage.setItem("logged","true");
    window.location.href = "";
  }
}
