import { Component ,OnInit} from '@angular/core';
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


  constructor(private load:LoadContentService) {
    this.sessionOption =true;
  }

  ngOnInit(){
    this.load.loadContent("session").then(data=> this.pageContent=data);
  }

}
