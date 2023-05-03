import { Component } from '@angular/core';
<<<<<<< HEAD
import { ScoreFootballService } from 'src/app/services/scores/socoreFootball/score-football.service';
=======
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { OverlayFootball } from 'src/app/interfaces/overlays.interface';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { OverlaySuscribeService } from 'src/app/services/firestore/overlay-suscribe.service';
>>>>>>> 23bb68da2d47a7888ce7d3979b6bb7de20478215

@Component({
  selector: 'app-overlay-football',
  templateUrl: './overlay-football.component.html',
  styleUrls: ['./overlay-football.component.css']
})
export class OverlayFootballComponent {
<<<<<<< HEAD
  constructor (private scoreService:ScoreFootballService){}

  //Las palabras
  team1:string = "Team1";
  team2:string = "Team2";
  score1:number =0;
  score2:number  =0;

  //Valores del color de las palabras
  colorTeam1!:string;
  colorTeam2!:string;
  colorScore1!:string;
  colorScore2!:string;
  colorSpace!:string;

  //Valores de la fuente
  font!:string;

  //Valores para el color del fondo de los elementos
  colorBoxTeam1!:string;
  colorBoxTeam2!:string;
  colorBoxScore1!:string;
  colorBoxScore2!:string;
  colorBoxSpace!:string;



  ngOnInit(){
    this.scoreService.score.subscribe(({score1,score2}) =>{
      this.score1 = score1;
      this.score2 = score2;
    })
    //Hay que suscribir la escucha a la base de datos
    //https://firebase.google.com/docs/firestore/query-data/listen?hl=es-419
=======
  constructor (private db:OverlaySuscribeService,
               private router:ActivatedRoute){}


  datos!:OverlayFootball;


  async ngOnInit(){
    const snapshot = this.router.snapshot;
    if(snapshot.routeConfig?.path==='edit'){
      //Lo de kenai

    }else{
      await this.db.createSuscribe(snapshot.params[0],snapshot.params[1]);
      this.db.suscribeOverlay().subscribe(datos => {
      this.datos = datos;
    });
    }
    
    
>>>>>>> 23bb68da2d47a7888ce7d3979b6bb7de20478215
  }

  ngOnDestroy(){
    //Hay que desuscribir la escucha de la base de datos
  }
}
