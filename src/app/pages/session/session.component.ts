import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Session } from 'src/app/interfaces/pagesContents.interface';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { LoadContentService } from 'src/app/services/load-content/load-content.service';
import { Database } from '@angular/fire/database';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';


@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  pageContent: Session = {};
  sessionOption: boolean;
  errorMessage: string = '';
  errorMessages: any[] = [];



  constructor(
    private load: LoadContentService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private authentication: AuthenticationService,
    private db: Database,
  ) {
    this.sessionOption = this.checkSessionOption();
  }

  ngOnInit() {
    this.load.loadContent("session").then(data => this.pageContent = data);
    //this.loadErrorMessagesFromDatabase(); // Cargar los mensajes de error desde la base de datos
    this.checkSessionStatus();
  }

  checkSessionOption() {
    return this.activeRoute.snapshot.params['sessionOption'] == "login" ? false : true;
  }

  changeSessionOption() {
    this.sessionOption = !this.sessionOption;
  }

  checkSessionStatus() {
    //if(this.authentication.checkLogged()) window.location.href = "";
  }

  redirect() {
    let param = this.activeRoute.snapshot.params['sessionOption'];
    if (Number.isInteger(parseInt(param))) {
      this.router.navigate(['/myOverlays']);
    }
  }

  async submit(form: NgForm) {
    // Obtengo todos los datos del formulario
    let mail = form.controls['mail'].value;
    let password = form.controls['password'].value;
    let name;
    let passwordConfirm;
    if (this.sessionOption) {
      name = form.controls['name'].value;
      passwordConfirm = form.controls['passwordConfirm'].value;
    }

    // Realizo la validación de los datos
    if (!this.sessionOption) {
      // Validación de inicio de sesión
      if (mail.trim() === '' || password.trim() === '') {
        //this.errorMessage = 'Por favor, ingresa todos los datos.';
        this.loadErrorMessageFromDatabase('errorMessage1');
        return;
      }
      const loginSuccess = await this.authentication.logInEmail(mail, password);
      console.log("A ver:" + loginSuccess);
      if (!loginSuccess) {
        //this.errorMessage = 'Credenciales incorrectas. Verifica tus datos.';
        this.loadErrorMessageFromDatabase('errorMessage2');
        form.reset(); // Resetear el formulario para limpiar los campos
        return;
      } else {
        // Inicio de sesión exitoso, redirigir a la página /myOverlays
        this.router.navigate(['/myOverlays']);
      }
    } else {
      // Validación de creación de cuenta
      if (name.trim() === '' || mail.trim() === '' || password.trim() === '' || passwordConfirm.trim() === '') {
        //this.errorMessage = 'Por favor, ingresa todos los datos.';
        this.loadErrorMessageFromDatabase('errorMessage1');
        return;
      }
    }
      // Validación de formato de correo electrónico
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(mail)) {
        //this.errorMessage = 'El correo electrónico ingresado no es válido.';
        this.loadErrorMessageFromDatabase('errorMessage3');
        return;
      }

      // Validación de formato de contraseña
      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{6,16}$/;
      if (!passwordPattern.test(password)) {
        //this.errorMessage = 'La contraseña debe tener entre 6 y 16 caracteres y contener al menos:\n- 1 letra mayúscula\n- 1 letra minúscula\n- 1 número\n- 1 carácter especial.';
        this.loadErrorMessageFromDatabase('errorMessage4');
        return;
      }

      if (password !== passwordConfirm) {
        //this.errorMessage = 'Las contraseñas no coinciden. Verifica tus datos.';
        this.loadErrorMessageFromDatabase('errorMessage5');
        return;
      }
      const registerSuccess = await this.authentication.registerUserEmail(name, mail, password);
      if (!registerSuccess) {
        this.errorMessage = 'Hubo un error al crear la cuenta. Inténtalo nuevamente.';
        return;
      } else {
        // Creación de cuenta exitosa, redirigir a la página /perfil
        this.router.navigate(['/profile']);
      }

    // Si todo está correcto, guardo el estado de inicio de sesión y redirijo
    sessionStorage.setItem('logged', 'true');
    this.redirect();
  }

  loadErrorMessageFromDatabase(key: string) {
    // Obtener una referencia a la base de datos
    const database = getDatabase();
    // Obtener una referencia al documento específico en la colección "messageErrorEnglish"
    const messageRef = ref(database, `messageErrorEnglish/${key}`);
    // Escuchar los cambios en el documento específico
    onValue(messageRef, (snapshot) => {
      const errorMessage = snapshot.val();
      console.log('errorMessage:', errorMessage);
      this.errorMessage = errorMessage; // Asignar el mensaje de error a la variable errorMessage en la clase
    });
  }



  /*loadErrorMessagesFromDatabase() {
    const firebaseConfig = {
      // Configuración de tu proyecto Firebase
    };
    // Inicializar la aplicación de Firebase
    const firebaseApp = initializeApp(firebaseConfig);
    // Obtener una referencia a la base de datos
    const database = getDatabase(firebaseApp);
    // Obtener una referencia a la colección "messageErrorEnglish"
    const messagesRef = ref(database, 'messageErrorEnglish');
    // Escuchar los cambios en la colección "messageErrorEnglish"
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      this.errorMessages = Object.values(data);
      console.log('errorMessages:', this.errorMessages);
    });
  }*/

  /*loadErrorMessageFromDatabase(key: string) {
    const errorMessageDoc = this.db.collection('messageErrorEnglish').doc(key);
    errorMessageDoc.valueChanges().subscribe((data: any) => {
      const errorMessage = data?.value;
      this.showError(errorMessage);
    });
  }


  showError(message: string) {
    // Mostrar el mensaje de error en la interfaz de usuario
    console.log(message);
  }*/


  logOut() {
    this.authentication.logOut();
  }
}
