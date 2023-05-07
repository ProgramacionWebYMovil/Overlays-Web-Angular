/*INTERFAZ OVERLAY
* type: tipo de overlay
* id: numero del overlay de ese tipo
*/
export interface Overlays {
    id:number,
    type:string,
    urlID:number,
    userID:string,
    font:string,
    name:string
}


export interface OverlayFootball{
    team1:string,
    team2:string,
    score1:number,
    score2:number,
    colorTeam1:string,
    colorTeam2:string,
    colorScore1:string,
    colorScore2:string,
    colorSpace:string,
    font:string,
    colorBoxTeam1:string,
    colorBoxTeam2:string,
    colorBoxScore1:string,
    colorBoxScore2:string,
    colorBoxSpace:string,
    timer:string;
    colorTimer:string;
    colorBoxTimer:string;
    image1Url:string;
    image2Url:string;
}

export interface OverlayPadel {
    team1:string,
    team2:string,
    service:boolean,
    goldPoint:boolean,
    setActual:number,
    sets1:Array<number>,
    sets2:Array<number>,
    point1:number,
    point2:number,
    colorTeam:string,
    colorBoxTeam:string,
    colorService:string,
    colorSetsWon:string,
    colorSetsLost:string,
    colorSetsBox:string,
    colorPoint:string,
    colorPointBox:string,
    colorGoldPoint:string,
    font:string
}

export interface OverlayBasketball {

}

export interface OverlayTennis{

}

export interface OverlayTimer{
    
}
