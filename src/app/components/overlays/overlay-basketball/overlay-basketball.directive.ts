import { Directive } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TYPE } from '../overlays-common';
import { Overlays } from 'src/app/interfaces/overlays.interface';

@Directive({
  selector: '[appOverlayBasketball]'
})


export class OverlayBasketballComponent implements Overlays {

  id!: number;
  type!: string;
  urlId!: number;
  userId!: string;
  font!: string;

  constructor(){

  }


}
