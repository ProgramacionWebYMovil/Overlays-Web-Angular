import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Session } from 'src/app/interfaces/pagesContents.interface';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { LoadContentService } from 'src/app/services/load-content/load-content.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  pageContent: Session = {};
  sessionOption: boolean;
  errorMessage: string = '';

  constructor(
    private load: LoadContentService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private authentication: AuthenticationService
  ) {
    this.sessionOption = this.checkSessionOption();
  }

  ngOnInit() {
    this.load.loadContent("session").then(data => this.pageContent = data);
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
        this.errorMessage = 'Por favor, ingresa todos los datos.';
        return;
      }
      const loginSuccess = await this.authentication.logInEmail(mail, password);
      if (!loginSuccess) {
        this.errorMessage = 'Credenciales incorrectas. Verifica tus datos.';
        form.reset(); // Resetear el formulario para limpiar los campos
        return;
      }
    } else {
      // Validación de creación de cuenta
      if (name.trim() === '' || mail.trim() === '' || password.trim() === '' || passwordConfirm.trim() === '') {
        this.errorMessage = 'Por favor, ingresa todos los datos.';
        return;
      }
      if (password !== passwordConfirm) {
        this.errorMessage = 'Las contraseñas no coinciden. Verifica tus datos.';
        return;
      }
      const registerSuccess = await this.authentication.registerUserEmail(name, mail, password);
      if (!registerSuccess) {
        this.errorMessage = 'Hubo un error al crear la cuenta. Inténtalo nuevamente.';
        return;
      }
    }

    // Si todo está correcto, guardo el estado de inicio de sesión y redirijo
    sessionStorage.setItem('logged', 'true');
    this.redirect();
  }

  logOut() {
    this.authentication.logOut();
  }
}
