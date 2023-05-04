import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputFootballService {

  team1:string = "";
  team2:string = "";
  font:string = "";
  private subject:Subject<string> = new Subject<string>();

  constructor() {}

  
}
