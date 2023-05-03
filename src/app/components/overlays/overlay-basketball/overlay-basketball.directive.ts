import { Directive } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TYPE } from '../overlays-common';
import { Overlays } from 'src/app/interfaces/overlays.interface';

@Directive({
  selector: '[appOverlayBasketball]'
})


export class OverlayBasketballComponent  {

  overlay:Overlays = {
    id: 0,
    type: TYPE.BASKETBALL,
    urlID: 0,
    userID: '',
    font: '',
    name: ''
  }
  constructor(){
  }




}
