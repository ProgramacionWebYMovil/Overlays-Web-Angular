import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { OverlayFirestoreService } from '../../firestore/overlay-firestore.service';

@Injectable({
  providedIn: 'root'
})
export class ScoreFootballService{
  private _score!:{score1:number,score2:number}

  private scoreSubject$ = new Subject<{score1:number,score2:number}>();

  constructor(
    private overlayFirestoreService:OverlayFirestoreService
  ) {
  }

  get scoreSubject(){
    return this.scoreSubject$;
  }

  get score():{score1:number,score2:number}{
    return this._score;
  }
  set scoreValues(score:{score1:number,score2:number}){
    this._score = {...score};
    console.log(this._score);
    this.scoreSubject$.next(this._score)
  }

  public set score1(value: number) {
    this._score.score1 = value;
    this.updateScore()
  }

  public set score2(value: number) {
    console.log(this._score);

    this._score.score2 = value;
    this.updateScore();
  }

  private updateScore(){
    this.scoreSubject$.next(this._score);
    //escribir en base de datos
    this.overlayFirestoreService.writeOverlay(this._score)

  }

}
