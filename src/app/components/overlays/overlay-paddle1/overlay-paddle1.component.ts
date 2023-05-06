import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OverlayPadel } from 'src/app/interfaces/overlays.interface';
import { CustomOverlayService } from 'src/app/services/customOverlay/custom-overlay.service';
import { OverlayFirestoreService } from 'src/app/services/firestore/overlay-firestore.service';
import { ScorePaddleService } from 'src/app/services/scores/scorePaddle/score-paddle.service';

@Component({
  selector: 'app-overlay-paddle1',
  templateUrl: './overlay-paddle1.component.html',
  styleUrls: ['./overlay-paddle1.component.css']
})
export class OverlayPaddle1Component implements OnInit{

  datos:OverlayPadel = {
    team1: '',
    team2: '',
    service: false,
    goldPoint: false,
    setActual:0,
    sets1: [],
    sets2: [],
    point1: 0,
    point2: 0,
    colorTeam: '',
    colorBoxTeam: '',
    colorService: '',
    colorSetsWon: '',
    colorSetsLost: '',
    colorSetsBox: '',
    colorPoint: '',
    colorPointBox: '',
    colorGoldPoint:'',
    font: ''
  };

  constructor(
    private activatedRoute:ActivatedRoute,
    private db:OverlayFirestoreService,
    private customOverlayService:CustomOverlayService,
    private scorePaddle:ScorePaddleService
  ){

  }

  async ngOnInit(){
    const snapshot = this.activatedRoute.snapshot;

    if(snapshot.routeConfig?.path==='edit'){
      await this.db.createSuscribe(
        this.customOverlayService.overlay.userID,
        this.customOverlayService.overlay.urlID);
      this.db.suscribeOverlay().subscribe(datos => {
        this.datos = datos;
        this.scorePaddle.updateLocalScore(datos);
      })
    }else{
      await this.db.createSuscribe(snapshot.params['uid'],snapshot.params['urlID']);
      this.db.suscribeOverlay().subscribe(datos => {
        this.datos = datos;
      });
    }


  }

  convertNumberToPoint(number:number): string{
    let setActual = this.datos.setActual;
    if(this.datos.sets1[setActual-1]===6 && this.datos.sets2[setActual-1]===6) return number.toString();
    switch(number){
      case 0:
        return "0";
      case 1:
        return "15";
      case 2:
        return "30";
      case 3:
        return "40";
      case 4:
        return "adv";
      default:
        return "";
    }
  }

}
