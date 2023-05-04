import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Overlays } from 'src/app/interfaces/overlays.interface';
import { OverlayFirestoreService } from 'src/app/services/firestore/overlay-firestore.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{

  uid!: string;
  urlID!: number;
  overlayType!:string;
  overlay:any;
  constructor(
    private route:ActivatedRoute,
    private overlayFirestoreService:OverlayFirestoreService){

  }

  

  async ngOnInit(){
    this.uid = this.route.snapshot.params['uid'];
    this.urlID = this.route.snapshot.params['urlID'];
    this.overlayType = await this.overlayFirestoreService.readOverlayType(this.uid,this.urlID);
  }
}
