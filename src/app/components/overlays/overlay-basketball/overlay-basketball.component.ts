import { Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { Overlays } from 'src/app/interfaces/overlays.interface';
import { TYPE } from '../overlays-common';

@Component({
  selector: 'app-overlay-basketball',
  templateUrl: './overlay-basketball.component.html',
  styleUrls: ['./overlay-basketball.component.css']
})
export class OverlayBasketballComponent {
  overlay:Overlays = {
    id: 0,
    type: TYPE.BASKETBALL,
    urlID: 0,
    userID: '',
    font: '',
    name: ''
  }

  teamAName = 'Team A';
  teamBName = 'Team B';
  teamAScore = 0;
  teamBScore = 0;
  teamAFouls = 0;
  teamBFouls = 0;
  constructor() {
  }

  reset() {
    this.teamAScore = 0;
    this.teamBScore = 0;
    this.teamAFouls = 0;
    this.teamBFouls = 0;
  }

  addScore(team: string, points: number) {
    if (team === 'A') {
      this.teamAScore += points;
    } else if (team === 'B') {
      this.teamBScore += points;
    }
  }

  addFoul(team: string) {
    if (team === 'A') {
      this.teamAFouls++;
    } else if (team === 'B') {
      this.teamBFouls++;
    }
  }
}
