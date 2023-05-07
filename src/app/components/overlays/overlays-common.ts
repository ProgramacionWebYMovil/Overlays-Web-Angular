import { OverlayBasketball, OverlayFootball, OverlayPadel, OverlayTennis, OverlayTimer } from "src/app/interfaces/overlays.interface"

export const ID = {
  FOOTBALL_1_ID:1,
  TENNIS_1_ID:2,
  TIMER_1_ID:3,
  PADDLE_1_ID:4,
  BASKETBALL_1_ID: 5
}

export const TYPE = {
  FOOTBALL:"football",
  BASKETBALL:"basketball",
  TENNIS:"tennis",
  TIMER:"timer",
  PADDLE:"paddle"
}
export const IMAGE_OVERLAY = [
  "assets/images/overlays_preview/football.png",
  "assets/images/overlays_preview/tennis.png",
  "assets/images/overlays_preview/timer.png",
  "assets/images/overlays_preview/paddle.png"
]

export class FootballOverlay1Default implements OverlayFootball{
  team1: string = "Team1";
  team2: string = "Team2";
  score1: number = 0;
  score2: number = 0;
  colorTeam1: string = "white"
  colorTeam2: string = "white"
  colorScore1: string = "#04006B"
  colorScore2: string = "#04006B"
  colorSpace: string = "#04006B"
  font: string = "Poppins-medium"
  colorBoxTeam1: string = "#04006B"
  colorBoxTeam2: string = "#04006B"
  colorBoxScore1: string = "#ffbb00"
  colorBoxScore2: string = "#ffbb00"
  colorBoxSpace: string = "white"
  timer: string = "" 
  colorTimer: string = ""
  colorBoxTimer: string = ""
  image1Url: string = "";
  image2Url: string = "";

}

export class TennisOverlay1Default implements OverlayTennis {

}

export class TimerOverlat1Default implements OverlayTimer{
  
}

export class PaddleOverlay1Default implements OverlayPadel{
  team1: string = "Pareja1";
  team2: string = "Pareja2";
  service: boolean = true;
  goldPoint: boolean = true;
  setActual: number = 1;
  sets1: number[] = [0,0,0];
  sets2: number[] = [0,0,0];
  point1: number = 0;
  point2: number = 0;
  colorTeam: string = "white";
  colorBoxTeam: string = "#04006B";
  colorService: string = "#ffbb00";
  colorSetsWon: string = "#000000";
  colorSetsLost: string = "gray";
  colorSetsBox: string = "white";
  colorPoint: string = "white";
  colorPointBox: string = "#04006B";
  colorGoldPoint: string = "#ffbb00";
  font: string = "Poppins-medium";

}

export class BasketballOverlay1Default implements OverlayBasketball {
  
}




