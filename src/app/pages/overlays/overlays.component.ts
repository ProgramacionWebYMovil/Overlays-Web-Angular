import { Component } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-overlays',
  templateUrl: './overlays.component.html',
  styleUrls: ['./overlays.component.css']
})
export class OverlaysComponent {
  
  //Overlays demo
  overlays!: any[];

  constructor(private db:FirestoreService){ }

  ngOnInit(){
    let language = localStorage.getItem('language');

    if(language=="PageContentSpanish"){
      this.db.getData("demoOverlaysSpanish","all")
        .then(data => {  
          this.overlays = data as any[];
        });
    }else{
      this.db.getData("demoOverlaysEnglish","all")
        .then(data => {  
          this.overlays = data as any[];
        });
    }
          
  }
}
