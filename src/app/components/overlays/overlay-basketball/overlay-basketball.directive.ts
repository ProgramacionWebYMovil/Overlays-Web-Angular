import { Directive } from '@angular/core';
import { Overlays } from 'src/app/interfaces/overlays.interface';
import { ID } from '../overlays-common';
import { ActivatedRoute } from '@angular/router';

@Directive({
  selector: '[appOverlayBasketball]'
})


export class OverlayBasketballComponent implements Overlays  {

  id:number = 0;
  urlId:number = 0;

  userId:string;
  buttons:any[]=[];
  inputs:any[]=[];
  colors:any[]=[];
  font:string="";

  constructor(private activeRoute:ActivatedRoute){
    this.urlId = activeRoute.snapshot.params['id'];
    this.userId = activeRoute.snapshot.params['uid'];
  }


}
