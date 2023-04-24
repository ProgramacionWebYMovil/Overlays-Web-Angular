import { Component } from '@angular/core';
import { OverlayBasketballComponent } from '../overlay-basketball.directive';
import { ActivatedRoute } from '@angular/router';
import { ID } from '../../overlays-common';


@Component({
  selector: 'app-basketball1',
  templateUrl: './basketball1.component.html',
  styleUrls: ['./basketball1.component.css']
})
export class Basketball1Component extends OverlayBasketballComponent {

  constructor(_activeRoute:ActivatedRoute){
    super(_activeRoute);
    this.id = ID.BASKETBALL_1_ID;

  }


}
