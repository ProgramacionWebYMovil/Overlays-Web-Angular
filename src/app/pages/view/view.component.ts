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

  overlay:Overlays={
    id: 0,
    type: '',
    urlID: 0,
    userID: '',
    font: '',
    name: ''
  };
  constructor(
    private route:ActivatedRoute,
    private overlayFirestoreService:OverlayFirestoreService){

  }



  async ngOnInit(){
    const uid = this.route.snapshot.params['uid'];
    const urlID = this.route.snapshot.params['urlID'];
    this.overlay = await this.overlayFirestoreService.readOverlayInfo(uid,urlID) as Overlays;
    const body = document.querySelector("body");
    //if (body != undefined) body.style.backgroundColor = 'white';
  }
}
