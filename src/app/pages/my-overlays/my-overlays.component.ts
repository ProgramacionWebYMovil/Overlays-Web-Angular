import { Component, ViewChild } from '@angular/core';
import { noop } from 'rxjs';
import { checkLogged } from 'src/app/common/tools/check-is-logged.tool';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';
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

  @ViewChild(PaginationComponent) pagination!: PaginationComponent;

  constructor(public load: LoadContentService,
    public overlayService:MyOverlaysService ) {
    this.load.loadContent("myoverlays").then(data => this.pageContent = data);
  }

  async ngOnInit(){
    await this.overlayService.loadMyOverlays().then((data)=>{
      this.overlays = this.overlayService.fillOverlays(0,this.overlayService.getCardsPerPage());
      this.paginationReady = true;  
    });
  }

  //METODO LLAMADO POR APP-PAGINATION
  changePage(startEnd:{start:number,end:number}):void{
    this.overlays = this.overlayService.fillOverlays(startEnd.start,startEnd.end);
  }

  deleteOverlay($event:any){
    const overlaysLength = this.overlayService.deleteOverlay($event);

    overlaysLength !== 0 ? this.paginationReady=true:this.paginationReady=false;
    this.pagination.postDeleteAction(overlaysLength);

  }
}
