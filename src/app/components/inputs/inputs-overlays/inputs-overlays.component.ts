import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CustomOverlayService } from 'src/app/services/customOverlay/custom-overlay.service';
import { OverlayFirestoreService } from 'src/app/services/firestore/overlay-firestore.service';
import { fontFamilies } from 'src/app/common/constants';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';


@Component({
  selector: 'app-inputs-overlays',
  templateUrl: './inputs-overlays.component.html',
  styleUrls: ['./inputs-overlays.component.css']
})
export class InputsOverlaysComponent implements OnInit {

  fonts = fontFamilies;
  form = this.formBuilder.group({
    team1:[""],
    team2:[""],
    font:[""]
  })
  constructor(
    private formBuilder:FormBuilder,
    private overlayFirestoreService:OverlayFirestoreService,
    private customOverlayService:CustomOverlayService,
    private auth:AuthenticationService
  ){
  }
  ngOnInit(): void {

  }
  submit(){
    const values = {...this.form.value};
    for(let prop in values){
      let value = values[prop as keyof (typeof values)];
      if(!value || value == "") delete values[prop as keyof (typeof values)];
    }
    this.overlayFirestoreService.writeOverlay(values,this.customOverlayService.overlay.urlID);
  }
}
