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
}

export interface OverlayBasketball {

}

export interface OverlayTennis{

}

export interface OverlayTimer{
    
}
