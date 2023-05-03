import { Component } from '@angular/core';
import { ScoreFootballService } from 'src/app/services/scores/socoreFootball/score-football.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { OverlayFootball } from 'src/app/interfaces/overlays.interface';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { OverlayFirestoreService } from 'src/app/services/firestore/overlay-firestore.service';

@Component({
  selector: 'app-overlay-football',
  templateUrl: './overlay-football.component.html',
  styleUrls: ['./overlay-football.component.css']
})
export class OverlayFootballComponent {
  
  constructor(
    private db:OverlayFirestoreService,
    private router:ActivatedRoute,
    private scoreService:ScoreFootballService
    ){}


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
    timer: 0,
    colorTimer: '',
    colorBoxTimer: '',
    id: 0,
    type: '',
    urlID: 0,
    userID: '',
    name: ''
  };


  async ngOnInit(){
    const snapshot = this.router.snapshot;
    if(snapshot.routeConfig?.path==='edit'){
      this.scoreService.score.subscribe(({score1,score2}) =>{
        console.log(score1);

        this.datos.score1 = score1;
        this.datos.score2 = score2;
      })

    }else{
      await this.db.createSuscribe(snapshot.params[0],snapshot.params[1]);
      this.db.suscribeOverlay().subscribe(datos => {
      this.datos = datos;
    });
    }


  }

  ngOnDestroy(){
    //Hay que desuscribir la escucha de la base de datos
  }
}
