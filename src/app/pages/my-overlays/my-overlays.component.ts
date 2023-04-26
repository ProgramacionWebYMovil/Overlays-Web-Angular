import { Component } from '@angular/core';
import { checkLogged } from 'src/app/common/tools/check-is-logged.tool';
import { MyOverlays } from 'src/app/interfaces/pagesContents.interface';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { LoadContentService } from 'src/app/services/load-content/load-content.service';
import { MyOverlaysService } from 'src/app/services/myOverlays/my-overlays.service';
import { OverlaysService } from 'src/app/services/overlays/overlays.service';

@Component({
  selector: 'app-my-overlays',
  templateUrl: './my-overlays.component.html',
  styleUrls: ['./my-overlays.component.css']
})
export class MyOverlaysComponent {

  overlays:any[] = [];
  pageContent:MyOverlays = {};
  paginationReady:boolean = false;

  constructor(private load: LoadContentService,
    public loadOverlays:MyOverlaysService ) {
    this.load.loadContent("myoverlays").then(data => this.pageContent = data);
  }

  async ngOnInit(){
    this.overlays = await this.loadOverlays.loadMyOverlays();
    this.paginationReady = true;
    console.log(this.overlays);
  }

  //METODO LLAMADO POR APP-PAGINATION
  changePage(startEnd:{start:number,end:number}):void{
    this.loadOverlays.fillOverlays(startEnd.start,startEnd.end);
  }


  

  //console.log(array.sort((a, b) => new Date(a.fechas).getTime() > new Date(b.fechas).getTime()));
}
