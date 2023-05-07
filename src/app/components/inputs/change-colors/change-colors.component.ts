import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CustomOverlayService } from 'src/app/services/customOverlay/custom-overlay.service';
import { OverlayFirestoreService } from 'src/app/services/firestore/overlay-firestore.service';

@Component({
  selector: 'app-change-colors',
  templateUrl: './change-colors.component.html',
  styleUrls: ['./change-colors.component.css']
})
export class ChangeColorsComponent implements OnInit{

  overlayData! : {};
  colors: any;
  form = this.formBuilder.group({});

  constructor(
    private formBuilder:FormBuilder,
    private overlayFirestoreService:OverlayFirestoreService,
    private customOverlayService:CustomOverlayService){ }

  async ngOnInit(){
    //ME SUSCRIBO A LOS DATOS DEL OVERLAY
    await this.overlayFirestoreService.createSuscribe(this.customOverlayService.overlay.userID,this.customOverlayService.overlay.urlID);
    this.overlayFirestoreService.suscribeOverlay().subscribe(data => {
      this.overlayData = data;
      if(this.colors===undefined){
        console.log("Hola");
        this.createForm();
      }
      
    })
    

  }

  createForm(){
    const asArray = Object.entries(this.overlayData);
    this.colors = asArray.filter(([key,value])=> key.includes("color"));

    for(let i = 0; i<this.colors.length;i++){
      const fieldName = this.colors[i][0];
      const fieldValue = this.colors[i][1];
      this.form.addControl(fieldName,this.formBuilder.control(fieldValue));
    }
  }

  submit(){
    const values = {...this.form.value};
    this.overlayFirestoreService.writeOverlay(values,this.customOverlayService.overlay.urlID);
  }

}
