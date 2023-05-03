import { OverlayBasketball, OverlayFootball, OverlayTennis, OverlayTimer } from "src/app/interfaces/overlays.interface"

export const ID = {
  FOOTBALL_1_ID:1,
  TENNIS_1_ID:2,
  TIMER_1_ID:3,
  BASKETBALL_1_ID: 4,
}

export const TYPE = {
  FOOTBALL:"football",
  BASKETBALL:"basketball",
  TENNIS:"tennis",
  TIMER:"timer"
}
export const IMAGE_OVERLAY = [
  "assets/images/overlays_preview/football.png",
  "assets/images/overlays_preview/tennis.png",
  "assets/images/overlays_preview/timer.png",
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
}

export class BasketballOverlay1Default implements OverlayBasketball {
  
}

export class TennisOverlay1Default implements OverlayTennis {

}

export class TimerOverlat1Default implements OverlayTimer{
  
}


