import { Component, OnInit } from '@angular/core';
import { ScoreFootballService } from 'src/app/services/scores/socoreFootball/score-football.service';

@Component({
  selector: 'app-buttons-football',
  templateUrl: './buttons-football.component.html',
  styleUrls: ['./buttons-football.component.css']
})
export class ButtonsFootballComponent implements OnInit{

  REMOVE_GOAL = -1;
  ADD_GOAL = 1;

  private _score = [0,0]

  constructor(
    private scoreFootballService:ScoreFootballService
  ){}

  ngOnInit(): void {
    this.scoreFootballService.score.subscribe(({score1,score2}) => {
      this._score[0]=score1;
      this._score[1]=score2;
    })
  }

  changeScore(team:number,change:number){
    if(this.isErrorChange(team,change)) return
    const newValue = this._score[team-1] + change;
    team === 1
    ?this.scoreFootballService.score1 = newValue
    :this.scoreFootballService.score2 = newValue;
  }

  resetScore(){
    this.scoreFootballService.score1 =0;
    this.scoreFootballService.score2 =0;
  }

  private isErrorChange(team:number,change:number):boolean{
    if(this._score[team-1] <= 0 && change === this.REMOVE_GOAL) return true;
    return false;
  }

}
