import { AfterContentChecked, OnInit } from '@angular/core';
import { Component, EventEmitter, Input } from '@angular/core';
import { ScoreFootballService } from 'src/app/services/scores/socoreFootball/score-football.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { OverlayFootball } from 'src/app/interfaces/overlays.interface';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { OverlayFirestoreService } from 'src/app/services/firestore/overlay-firestore.service';
import { CustomOverlayService } from 'src/app/services/customOverlay/custom-overlay.service';

@Component({
  selector: 'app-overlay-football1',
  templateUrl: './overlay-football1.component.html',
  styleUrls: ['./overlay-football1.component.css']
})
export class OverlayFootball1Component implements OnInit,AfterContentChecked{

  datos:OverlayFootball = {
      team1: '',
      team2: '',
      score1: 0,
      score2: 0,
      colorTeam1: '',
      colorTeam2: '',
      colorScore1: '',
      colorScore2: '',
      colorSpace: '',
      font: '',
      colorBoxTeam1: '',
      colorBoxTeam2: '',
      colorBoxScore1: '',
      colorBoxScore2: '',
      colorBoxSpace: '',
      timer: '',
      colorTimer: '',
      colorBoxTimer: '',
      image1Url:'',
      image2Url:''
    };
  constructor(
    private db:OverlayFirestoreService,
    private router:ActivatedRoute,
    private scoreService:ScoreFootballService,
    private customOverlayService:CustomOverlayService
    ){}

  async ngOnInit(){
    const snapshot = this.router.snapshot;

    if(snapshot.routeConfig?.path==='edit'){
      // if(!this.customOverlayService.overlayData){
      //   this.datos = await this.db.readOverlay() as OverlayFootball;
      //   this.customOverlayService.overlayData = this.datos;
      // }else{
      //   this.datos = this.customOverlayService.overlayData as OverlayFootball;
      // }
      await this.db.createSuscribe(this.customOverlayService.overlay.userID,this.customOverlayService.overlay.urlID);
      this.db.suscribeOverlay().subscribe(datos => {
        this.datos = datos;
        this.scoreService.scoreValues = {score1:this.datos.score1,score2:this.datos.score2};
      });

    }else{
      //VIEW
      await this.db.createSuscribe(snapshot.params['uid'],snapshot.params['urlID']);
      this.db.suscribeOverlay().subscribe(datos => {
      this.datos = datos;
    });
    }


  }


  async ngAfterContentChecked(){
    /*this.db.readOverlay().then(data =>{
      this.datos = data as OverlayFootball;
    });*/
  }

  ngOnDestroy(){
    //Hay que desuscribir la escucha de la base de datos
  }
}
