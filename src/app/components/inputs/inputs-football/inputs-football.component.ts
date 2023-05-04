import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InputFootballService } from 'src/app/services/inputs/input-football.service';

@Component({
  selector: 'app-inputs-football',
  templateUrl: './inputs-football.component.html',
  styleUrls: ['./inputs-football.component.css']
})
export class InputsFootballComponent {

  constructor(private inputsFootballService:InputFootballService){
  }

  get inputs(){
    return this.inputsFootballService;
  }

  
}
