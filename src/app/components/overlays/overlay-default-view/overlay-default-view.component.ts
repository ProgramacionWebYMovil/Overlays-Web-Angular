import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Overlays } from 'src/app/interfaces/overlays.interface';
import { OverlayFirestoreService } from 'src/app/services/firestore/overlay-firestore.service';

@Component({
  selector: 'app-overlay-default-view',
  templateUrl: './overlay-default-view.component.html',
  styleUrls: ['./overlay-default-view.component.css']
})
export class OverlayDefaultViewComponent implements OnInit {
  overlay!:Overlays

  constructor(
    private overlayFirestoreService:OverlayFirestoreService,
    private activatedRoute:ActivatedRoute){

  }

  async ngOnInit() {
    const snapshot = this.activatedRoute.snapshot;
    this.overlay = await this.overlayFirestoreService.readOverlayView(
      snapshot.params[0],
      snapshot.params[1]) as Overlays;
    console.log(this.overlay);
  }
}
