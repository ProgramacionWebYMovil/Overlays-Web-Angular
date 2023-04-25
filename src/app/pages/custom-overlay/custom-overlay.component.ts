import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Overlays } from 'src/app/interfaces/overlays.interface';

@Component({
  selector: 'app-custom-overlay',
  templateUrl: './custom-overlay.component.html',
  styleUrls: ['./custom-overlay.component.css']
})
export class CustomOverlayComponent {

  overlay: Overlays = {
    id:0,
    type:"",
    urlId:0,
    userId:"",
    font:"",
  };

  constructor(private activeRoute: ActivatedRoute){
    let dataRoute = this.getDataFromRoute();
    this.overlay.userId = dataRoute[0];
    this.overlay.urlId = dataRoute[1];
    this.getDataFromRoute();
    this.getDataFromRoute();
  }

  ngOnInit(){
    console.log(this.overlay);
  }

  getDataFromDatabase(){


  }

  getDataFromRoute(){
    return [
    this.activeRoute.snapshot.params['uid'],
    parseInt(this.activeRoute.snapshot.params['urlId'])
    ]
  }



}
