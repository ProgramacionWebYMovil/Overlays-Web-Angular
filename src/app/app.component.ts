import { Component } from '@angular/core';
import { FirestoreService } from './services/firestore/firestore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Overlays-Web-Angular';

  constructor(private db:FirestoreService) {
  }

  aabd(){
    
  }
}
