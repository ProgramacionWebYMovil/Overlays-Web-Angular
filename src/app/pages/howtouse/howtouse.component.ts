import { Component } from '@angular/core';
import { LoadContentService } from 'src/app/services/load-content/load-content.service';
import {Howtouse} from "../../interfaces/pagesContents.interface";

@Component({
  selector: 'app-howtouse',
  templateUrl: './howtouse.component.html',
  styleUrls: ['./howtouse.component.css']
})
export class HowtouseComponent {
  pageContent:Howtouse = {}

  constructor(private load:LoadContentService) {}

  ngOnInit(){
    this.load.loadContent("howtouse").then(data=> this.pageContent=data);
  }
}
