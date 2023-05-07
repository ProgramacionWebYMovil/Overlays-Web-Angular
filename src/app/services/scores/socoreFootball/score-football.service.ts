import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { OverlayFirestoreService } from '../../firestore/overlay-firestore.service';
import { CustomOverlayService } from '../../customOverlay/custom-overlay.service';

@Injectable({
  providedIn: 'root'
})
export class ScoreFootballService{
  private _score!:{score1:number,score2:number}

  constructor(
    private overlayFirestoreService:OverlayFirestoreService,
    private customOverlayService:CustomOverlayService
  ) {
  }
  get score():{score1:number,score2:number}{
    return this._score;
  }
  set scoreValues(score:{score1:number,score2:number}){
    this._score = {...score};
  }

  public set score1(value: number) {
    this._score.score1 = value;
    this.updateScore()
  }

  public set score2(value: number) {
    this._score.score2 = value;
    this.updateScore();
  }

  private updateScore(){
    //escribir en base de datos
    this.overlayFirestoreService.writeOverlay(this._score,this.customOverlayService.overlay.urlID)

  }

}
