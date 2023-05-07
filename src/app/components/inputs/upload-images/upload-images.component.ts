import { Component } from '@angular/core';
import { UploadImagesService } from 'src/app/services/inputs/upload-images.service';


@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.css']
})
export class UploadImagesComponent {

  isCharge:boolean = false;
  userImages:string[] = [''];

  constructor(
    public readonly uploadImageService:UploadImagesService
  ){
    this.uploadImageService.getUsersImages().subscribe(images => {
      this.userImages = images;
    })
    this.uploadImageService.getChargeSubject().subscribe(isCharge => {
      this.isCharge = isCharge;
      //this.uploadImageService.getChargeSubject().unsubscribe();
      this.uploadImageService.getStoragedImages();
    });


  }

  onFileUpload(event:any){
    const file = event.target.files[0];
    this.uploadImageService.onFileUpload(file);
  }
}
