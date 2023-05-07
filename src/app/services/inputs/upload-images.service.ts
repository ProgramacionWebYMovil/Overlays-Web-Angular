import { Injectable } from '@angular/core';
import { Storage,ref,uploadBytes, getDownloadURL, listAll, } from '@angular/fire/storage';
import { Subject } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UploadImagesService {

  private IMAGE_STORAGE?:string;

  private subject:Subject<boolean> = new Subject<boolean>;
  private imagesSubject:Subject<string[]> = new Subject<string[]>;

  userImages:string[] = [];


  constructor(
    private storage:Storage,
    private auth:AuthenticationService
  ) {

    this.auth.getUidWithPromise().then(response =>{
      this.IMAGE_STORAGE = `userImages/${response}/`;
      this.subject.next(true);
    })
  }

  async onFileUpload(file:File) {
    const imgRef = ref(this.storage,this.IMAGE_STORAGE + file.name);
    console.log(file);
    await uploadBytes(imgRef,file)
    .then(response => console.log(response))
    .catch(error => console.log(error));
    this.getStoragedImages();
  }

  getChargeSubject():Subject<boolean>{
    return this.subject;
  }

  getUsersImages():Subject<string[]>{
    return this.imagesSubject;
  }

  async getStoragedImages(): Promise<void>{
    const imgRef = ref(this.storage,this.IMAGE_STORAGE);
    console.log("Entrando");

    const response = await listAll(imgRef);

    console.log("Saliendo")
    console.log(response);
    this.userImages.splice(0);
    for (let item of response.items) {
      const url = await getDownloadURL(item);
      console.log(url);
      this.userImages.push(url);
    }
    this.imagesSubject.next(this.userImages);

  }

}
