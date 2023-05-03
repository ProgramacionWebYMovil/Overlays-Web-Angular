import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreFootballService implements OnInit{
  private _score = {
    score1:0,
    score2:0
  }
  private scoreSubject = new Subject<{score1:number,score2:number}>();

  constructor() {}


  ngOnInit(): void {
    this.scoreSubject.next(this._score);
  }

  get score(){
    return this.scoreSubject;
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
    this.scoreSubject.next(this._score);
    //escribir en base de datos
  }

}
