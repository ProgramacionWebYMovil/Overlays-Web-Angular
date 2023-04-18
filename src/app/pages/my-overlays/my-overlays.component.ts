import { Component } from '@angular/core';
import { checkLogged } from 'src/app/common/tools/check-is-logged.tool';
import { MyOverlays } from 'src/app/interfaces/pagesContents.interface';
import { LoadContentService } from 'src/app/services/load-content/load-content.service';

@Component({
  selector: 'app-my-overlays',
  templateUrl: './my-overlays.component.html',
  styleUrls: ['./my-overlays.component.css']
})
export class MyOverlaysComponent {

  pageContent:MyOverlays = {};
  constructor(private load: LoadContentService ) {
    this.load.loadContent("myoverlays").then(data => this.pageContent = data);
  }

  ngOnInit(){
    //esto no puede ser asi
    //console.log(checkLogged());
  }

  overlays:any[] = [];

  //console.log(array.sort((a, b) => new Date(a.fechas).getTime() > new Date(b.fechas).getTime()));
}
