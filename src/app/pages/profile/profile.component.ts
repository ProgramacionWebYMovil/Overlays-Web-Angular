import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { User } from 'src/app/interfaces/pagesContents.interface';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  selectedImage: any;
  private _selectedFileName: string;

  user: User = {}; // Inicializa las propiedades del usuario
  //currentUser: any; // Define la propiedad currentUser
  currentUser: string | null = null;
  private authSubscription: Subscription = new Subscription();


  constructor(private firestoreService: FirestoreService,
              @Inject(Auth) private auth: Auth ,
              @Inject(AuthenticationService) private authService: AuthenticationService)
  {
    this._selectedFileName = '';
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

  ngOnInit() {
    this.authSubscription = this.authService.currentUser$.subscribe(uid => {
      this.currentUser = uid;
      console.log('User ID:', this.currentUser);
    });

    // Obtén el UID del usuario actual llamando a getCurrentUid()
    this.currentUser = this.authService.getCurrentUid();
    if (this.currentUser) {
      this.firestoreService.getData('Users', this.currentUser).then((userData: User) => {
        this.user = userData; // Asigna los datos del usuario a la propiedad user
      }).catch((error) => {
        console.error('Error al obtener los datos del usuario:', error);
      });
    }
  }

  onSubmit() {
    // Obtén el ID del usuario actual (reemplaza esta línea con el método adecuado para obtener el ID del usuario)
    const userID: string = this.authService.getCurrentUid() ?? '';


    // Crea un objeto con los datos actualizados del usuario
    const updatedUserData = {
      userName: this.user.userName,
      userEmail: this.user.userEmail,
      // Otros campos actualizados del usuario...
    };

    // Llama al método para actualizar los datos del usuario en Firestore
    this.firestoreService.updateUserData(userID, updatedUserData).then(() => {
      console.log('Datos actualizados correctamente');
    }).catch((error) => {
      console.error('Error al actualizar los datos', error);
    });
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  /*
  ngOnInit() {
    if (this.auth.currentUser) {
      this.currentUser = this.auth.currentUser?.uid; // Obtén el UID del usuario actual
      console.log('User ID:', this.currentUser); // Agrega este console.log()
    }


    if (this.currentUser) {
      this.firestoreService.getData('Users', this.currentUser.uid).then((userData: User) => {
        this.user = userData; // Asigna los datos del usuario a la propiedad user
      }).catch((error) => {
        console.error('Error al obtener los datos del usuario:', error);
      });
    }
  }


  updateUserData() {
    this.firestoreService.updateData('Users', this.currentUser.uid, this.user).then(() => {
      console.log('Datos del usuario actualizados correctamente.');
    }).catch((error) => {
      console.error('Error al actualizar los datos del usuario:', error);
    });
  }

  onSubmit() {
    // Obtén el ID del usuario actual (reemplaza esta línea con el método adecuado para obtener el ID del usuario)
    const userID = this.authService.getCurrentUid();

    // Crea un objeto con los datos actualizados del usuario
    const updatedUserData = {
      userName: this.user.userName,
      userEmail: this.user.userEmail,
      // Otros campos actualizados del usuario...
    };

    // Llama al método para actualizar los datos del usuario en Firestore
    this.firestoreService.updateUserData(userID, updatedUserData).then(() => {
      console.log('Datos actualizados correctamente');
    }).catch((error) => {
      console.error('Error al actualizar los datos', error);
    });
  }
  */

}
