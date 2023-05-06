import { Component } from '@angular/core';
import { ScorePaddleService } from 'src/app/services/scores/scorePaddle/score-paddle.service';

@Component({
  selector: 'app-buttons-paddle',
  templateUrl: './buttons-paddle.component.html',
  styleUrls: ['./buttons-paddle.component.css']
})
export class ButtonsPaddleComponent {

  constructor(
    private scorePaddleService:ScorePaddleService
  ){}

  addPoint(team:number){
    this.scorePaddleService.addPoint(team);
  }

  removePoint(team:number){
    this.scorePaddleService.removePoint(team);
  }

  resetMatch(){
    this.scorePaddleService.resetMatch();
  }

  changeService(){
    this.scorePaddleService.changeService();
  }


}
