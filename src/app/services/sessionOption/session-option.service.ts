import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionOptionService {

  private sessionOption$:Observable<boolean>;
  private sessionOption:boolean = false;

  constructor() {
    this.sessionOption$ = new Observable(subscriber =>
      subscriber.next(this.sessionOption)
    );
  }

  get sessionOptionObservable(){
    return this.sessionOption$;
  }

  set sessionOptionValue(value:boolean){
    this.sessionOption = value;
  }


}
