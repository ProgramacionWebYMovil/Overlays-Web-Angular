import { Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { TYPE } from '../overlays-common';

@Component({
  selector: 'app-overlay-basketball',
  templateUrl: './overlay-basketball.component.html',
  styleUrls: ['./overlay-basketball.component.css']
})
export class OverlayBasketballComponent {

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
