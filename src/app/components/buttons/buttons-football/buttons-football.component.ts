import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { ScoreFootballService } from 'src/app/services/scores/socoreFootball/score-football.service';

@Component({
  selector: 'app-buttons-football',
  templateUrl: './buttons-football.component.html',
  styleUrls: ['./buttons-football.component.css']
})
export class ButtonsFootballComponent implements OnInit{

  REMOVE_GOAL = -1;
  ADD_GOAL = 1;

  constructor(
    private scoreFootballService:ScoreFootballService
  ){

  }
  ngOnInit(): void {
    //this._score =  Object.values(this.scoreFootballService.score);
  }

  changeScore(team:number,change:number){
    const currentScore = Object.values(this.scoreFootballService.score);

    if(this.isErrorChange(currentScore[team-1],change)) return;
    const result = currentScore[team-1] + change;
    team === 1
    ?this.scoreFootballService.score1 = result
    :this.scoreFootballService.score2 = result;
  }

  resetScore(){
    this.scoreFootballService.score1 =0;
    this.scoreFootballService.score2 =0;
  }

  private isErrorChange(score:number,change:number):boolean{
    if(score <= 0 && change === this.REMOVE_GOAL) return true;
    return false;
  }

}
