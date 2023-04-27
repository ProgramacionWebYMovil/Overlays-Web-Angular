import { Component } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { User } from 'src/app/interfaces/pagesContents.interface';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  selectedImage: any;
  defaultValue: any = 'Valor predeterminado';
  private _selectedFileName: string;

  user: User = {}; // Inicializa las propiedades del usuario
  currentUser: any; // Define la propiedad currentUser

  constructor(private firestoreService: FirestoreService,  @Inject(AuthenticationService) private authService: AuthenticationService) {
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
    this.currentUser = this.authService.getCurrentUid(); // Obtén el UID del usuario actual


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
    const userID = 'aquí_debes_obtener_el_ID_del_usuario_actual';

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


}
