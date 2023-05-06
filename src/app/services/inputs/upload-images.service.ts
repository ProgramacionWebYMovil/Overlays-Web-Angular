import { Injectable } from '@angular/core';
import { Storage,ref,uploadBytes } from '@angular/fire/storage';
import { Subject } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UploadImagesService {

  private IMAGE_STORAGE?:string;

  private subject:Subject<boolean> = new Subject<boolean>;


  constructor(
    private storage:Storage,
    private auth:AuthenticationService
  ) {

    this.auth.getUidWithPromise().then(response =>{
      this.IMAGE_STORAGE = `userImages/${response}/`;
      this.subject.next(true);
    })
  }

  onFileUpload(file:File) {
    console.log(this.IMAGE_STORAGE);

    const imgRef = ref(this.storage,this.IMAGE_STORAGE + file.name);
    uploadBytes(imgRef,file)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

  getChargeSubject():Subject<boolean>{
    return this.subject;
  }

}
