import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { FirestoreService } from '../firestore/firestore.service';
import { analyticInstance$ } from '@angular/fire/analytics';
import { Auth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyOverlaysService {

  
  overlays!:any[];

  actualOverlays!:any[];

  
  constructor(private db: FirestoreService, private auth:AuthenticationService) { 
    
  }

  

  async loadMyOverlays() {
    const id = await this.auth.getUidWithPromise();
    const overlays = await this.db.getMyOverlays(id as string);
    this.overlays = this.sortOverlays(overlays);
    return this.overlays;
    /*return this.auth.getUidWithPromise().then( async id=>{
      const overlays = await this.db.getMyOverlays(id as string);
      this.overlays = overlays;
      return this.fillOverlays(0,this.getCardsPerPage());
    });*/
  }

  fillOverlays(start:number, end:number):any {
    if(this.overlays.length < end)  end = this.overlays.length;
    this.actualOverlays = [];
    for(let i=start,  j = 0; i<end; i++ ,j++){
      this.actualOverlays[j] = this.overlays[i];
    }
    return this.actualOverlays;
  }

  getCardsPerPage():number {
    return innerWidth>=1250 ?  8 : 4;
  }

  getnumberOfPages():number {
    let nPages = this.overlays.length / this.getCardsPerPage();
    if(nPages % 1 != 0){
      nPages = Math.trunc(nPages);
      nPages++;
    }
    return nPages;
  }

  sortOverlays(overlays:any[]){
    return overlays.sort((a, b) => b.date.toDate() - a.date.toDate());
  }

  


}
