import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  }

  changeSessionOption(){
    this.sessionOption = !this.sessionOption;
  }

  submit(){
    sessionStorage.setItem("logged","true");
    window.location.href = "";
  }
}
