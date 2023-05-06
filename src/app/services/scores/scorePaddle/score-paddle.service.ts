import { Injectable } from '@angular/core';
import { OverlayFirestoreService } from '../../firestore/overlay-firestore.service';

@Injectable({
  providedIn: 'root'
})
export class ScorePaddleService {


  service!:boolean;
  goldPoint!:boolean;
  sets1!:[number,number,number];
  sets2!:[number,number,number];
  point1!:number;
  point2!:number;
  setActual!:number;

  constructor(
    private db:OverlayFirestoreService
  ) {}



  addPoint(player:number){
    if(this.setActual===4){
      this.writeScoreToDatabase();
      return;
    } 

    if(this.sets1[this.setActual-1]===6 && this.sets2[this.setActual-1]===6) {
      this.tieBreak(player);
      this.writeScoreToDatabase();
      return;
    }

    //GOLD POINT
    if(this.goldPoint){
      switch(player){
        //Punto para el jugador 1
        case 1:
          this.point1 < 3 ? this.point1++ : this.addGame(1);
          break;

        //Punto para el jugador 2
        case 2:
          this.point2 < 3 ? this.point2++ : this.addGame(2);
          break;
      }
    //NORMAL POINT
    }else{
      switch(player){
        case 1:
          this.point1 < 4 ? this.point1++ : this.addGame(1);
          break;
        case 2:
          this.point2 < 4 ? this.point2++ : this.addGame(2);
          break;
      }
    }
    this.writeScoreToDatabase();
  }

  addGame(player:number){

    //RESETEO LOS PUNTOS DEL JUEGO
    this.point1 = 0;
    this.point2 = 0;

    let set1 = this.sets1[this.setActual-1];
    let set2 = this.sets2[this.setActual-1];
    switch(player){
      //Juego para el jugador 1
      case 1:
        switch(true){
          case set1<5:
            this.sets1[this.setActual-1]++;
            break;
          case set1==5 && set2<5:
            this.sets1[this.setActual-1]++;
            this.addSet(1);
            break;
          case set1==5 && set2>=5:
            this.sets1[this.setActual-1]++;
            break;
          case set1==6:
            this.sets1[this.setActual-1]++; 
            this.addSet(1);
            break;
        }
        break;
      //Juego para el jugador 2
      case 2:
        switch(true){
          case set2<5:
            this.sets2[this.setActual-1]++;
            break;
          case set2==5 && set1<5:
            this.sets2[this.setActual-1]++;
            this.addSet(2);
            break;
          case set2==5 && set1>=5:
            this.sets2[this.setActual-1]++;
            break;
          case set2==6:
            this.sets2[this.setActual-1]++; 
            this.addSet(1);
            break;
        }
        break;
    }
    this.service = !this.service;
  }

  addSet(player:number){
    //Set para el jugador 1
    if(player===1){
      switch(this.setActual){
        case 1:
          this.setActual++;
          break;
        case 2:
          let set1 = this.sets1[0];
          let set2 = this.sets2[0];
          set1>set2 ? this.endMatch() : this.setActual++;
          break;
        case 3:
          this.endMatch();
          break;
      }
    }else{
      switch(this.setActual){
        case 1:
          this.setActual++;
          break;
        case 2:
          let set1 = this.sets1[0];
          let set2 = this.sets2[0];
          set1<set2 ? this.endMatch() : this.setActual++;
          break;
        case 3:
          this.endMatch();
          break;
      }
    }
  }

  changeService(){
    this.service = !this.service;
    this.writeScoreToDatabase();
  }

  tieBreak(player:number){
    if(player===1){
      switch(true){
        case this.point1<6 || this.point2>=this.point1:
          this.point1++;
          break;
        case this.point1>this.point2:
          this.point1++;
          this.addGame(player);
          break;
      }
    }else{
      switch(true){
        case this.point2<6 || this.point1>=this.point2:
          this.point2++;
          break;
        case this.point2>this.point1:
          this.point2++;
          this.addGame(player);
          break;
      }
    }
    
  }

  endMatch(){
    this.setActual=4;
  }

  removePoint(player:number){
    //Condición para principio de partido
    if(this.point1===0 && this.point2===0 && this.sets1[0] === 0 && this.sets2[0] === 0) return;
    if(player===1){
      this.point1 > 0 ? this.point1-- : this.removeGame(player); 
    }else{
      this.point2 > 0 ? this.point2-- : this.removeGame(player);
    }
    this.writeScoreToDatabase();
  }

  removeGame(player:number){
    if(player===1){
      switch(true){
        case this.sets1[this.setActual-1] > 0 && this.sets2[this.setActual-1] >= 0:
          this.sets1[this.setActual-1]--;
          break;
        case this.sets1[this.setActual-1] === 0 && this.sets2[this.setActual-1] === 0:
          this.removeSet(player);
          break;
      }
    }else{
      switch(true){
        case this.sets2[this.setActual-1] > 0 && this.sets1[this.setActual-1] >= 0:
          this.sets2[this.setActual-1]--;
          break;
        case this.sets2[this.setActual-1] === 0 && this.sets1[this.setActual-1] === 0:
          this.removeSet(player);
          break;
      }
    }
  }

  removeSet(player:number){
    if(this.setActual===1){
      return;
    }else{
      this.setActual--;
    }
  }

  resetMatch(){
    this.point1 = 0;
    this.point2 = 0;
    this.sets1 = [0,0,0];
    this.sets2 = [0,0,0];
    this.setActual = 1;
    this.writeScoreToDatabase();
  }

  updateLocalScore(score:any){
    this.service = score.service;
    this.goldPoint = score.goldPoint;
    this.sets1 = score.sets1;
    this.sets2 = score.sets2;
    this.point1 = score.point1;
    this.point2 = score.point2;
    this.setActual = score.setActual;
  }

  writeScoreToDatabase(){
    this.db.writeOverlay(
      { service:this.service,
        goldPoint:this.goldPoint,
        sets1:this.sets1,
        sets2:this.sets2,
        point1:this.point1,
        point2:this.point2,
        setActual:this.setActual}
    );
  }


}
