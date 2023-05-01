import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { Profile, User} from 'src/app/interfaces/pagesContents.interface';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Subscription } from 'rxjs';
import { LoadContentService } from 'src/app/services/load-content/load-content.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  pageContent:Profile = {}

  selectedImage: any;
  private _selectedFileName: string;

  user: User = {}; // Inicializa las propiedades del usuario
  currentUser: string | null = null;
  private authSubscription: Subscription = new Subscription();
  previousUserName: string | null = null;
  previousUserEmail: string | null = null;
  previousUserPhoto: string | null = null;
  userData: any;

  constructor(private load:LoadContentService,
              private firestoreService: FirestoreService,
              @Inject(Auth) private auth: Auth ,
              @Inject(AuthenticationService) private authService: AuthenticationService)
  { this._selectedFileName = '';}

  ngOnInit() {
    this.load.loadContent("profile").then(data=> this.pageContent=data);
    this.loadUserData();
    console.log('User nombre:', this.previousUserName);
    this.authSubscription = this.authService.currentUser$.subscribe(uid => {
      this.currentUser = uid;
      console.log('User ID:', this.currentUser);
    });
  }

  async loadUserData(): Promise<void> {
    this.userData = await this.authService.getUserData();
    this.previousUserName = this.userData.userName;
    this.previousUserEmail = this.userData.userEmail;
    this.previousUserPhoto = this.userData.userPhoto;
    console.log('User nombre:', this.previousUserName);
    console.log('User email:', this.previousUserEmail);
    console.log('User foto:', this.previousUserPhoto);
    if (this.userData.userPhoto === 'default') {
      this.previousUserPhoto = '../../assets/icons/user-white.png';
    }
  }

  onSubmit() {
    // Obtén el ID del usuario actual (reemplaza esta línea con el método adecuado para obtener el ID del usuario)
    const userID: string = this.authService.getCurrentUid2() ?? '';
    // Asigna la imagen seleccionada a la propiedad userPhoto
    this.user.userPhoto = this.selectedImage;

    // Crea un objeto con los datos actualizados del usuario
    const updatedUserData = {
      userName: this.user.userName,
      userEmail: this.user.userEmail,
      userPhoto: this.user.userPhoto,
      // Otros campos actualizados del usuario...
    };

    // Llama al método para actualizar los datos del usuario en Firestore
    this.firestoreService.updateUserData(userID, updatedUserData).then(() => {
      console.log('Datos actualizados correctamente');
    }).catch((error) => {
      console.error('Error al actualizar los datos', error);
    });
  }

  get selectedFileName(): string {
    return this._selectedFileName;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

}
