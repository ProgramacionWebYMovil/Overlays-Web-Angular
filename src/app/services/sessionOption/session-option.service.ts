import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionOptionService {

  private sessionOption:boolean;

  constructor() {
    this.sessionOption = false;
  }

  get sessionOptionValue(){
    return this.sessionOption;
  }

  set sessionOptionValue(value){
    this.sessionOption = value;
  }


}
