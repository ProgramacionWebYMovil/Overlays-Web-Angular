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

  constructor(public load: LoadContentService,
    public loadOverlays:MyOverlaysService ) {
    this.load.loadContent("myoverlays").then(data => this.pageContent = data);
  }

  async ngOnInit(){
    await this.loadOverlays.loadMyOverlays().then((data)=>{
      this.overlays = this.loadOverlays.fillOverlays(0,this.loadOverlays.getCardsPerPage());
      this.paginationReady = true;  
    });
  }

  //METODO LLAMADO POR APP-PAGINATION
  changePage(startEnd:{start:number,end:number}):void{
    this.overlays = this.loadOverlays.fillOverlays(startEnd.start,startEnd.end);
  }
}
