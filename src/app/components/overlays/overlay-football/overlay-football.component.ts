import { Component } from '@angular/core';
import { ScoreFootballService } from 'src/app/services/scores/socoreFootball/score-football.service';

@Component({
  selector: 'app-overlay-football',
  templateUrl: './overlay-football.component.html',
  styleUrls: ['./overlay-football.component.css']
})
export class OverlayFootballComponent {
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
  }

  ngOnDestroy(){
    //Hay que desuscribir la escucha de la base de datos
  }
}
