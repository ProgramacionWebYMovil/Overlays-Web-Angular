import { Component ,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Session } from 'src/app/interfaces/pagesContents.interface';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { LoadContentService } from 'src/app/services/load-content/load-content.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent {
  pageContent:Session = {}

  sessionOption:boolean;


  constructor(private load:LoadContentService,
    private activeRoute:ActivatedRoute,
    private authentication:AuthenticationService) {
    this.sessionOption = this.checkSessionOption();
  }

  ngOnInit(){
    this.load.loadContent("session").then(data=> this.pageContent=data);
    this.checkSessionStatus();

  }
  checkSessionOption() {
    return this.activeRoute.snapshot.params['sessionOption'] == "login" ? false:true;
  }



  changeSessionOption(){
    this.sessionOption = !this.sessionOption;
  }

  checkSessionStatus(){
    //if(this.authentication.checkLogged()) window.location.[routerLink] = "";
  }

  redirect(){
    let param = this.activeRoute.snapshot.params['sessionOption'];
    if(Number.isInteger((parseInt(param)))){
      //REDIRIJO A EDIT OVERLAYS CON EL OVERLAY
    }
  }

  //HAY QUE AÑADIR LA POSIBILIDAD DE FALLO AL LOGUEARSE!!!
  async submit(form:NgForm){

    //Obtengo todos los datos del formulario
    let mail = form.controls['mail'].value;
    let password = form.controls['password'].value;
    let name;
    let passwordConfirm;
    if(this.sessionOption){
      name = form.controls['name'].value;
      passwordConfirm = form.controls['passwordConfirm'].value;
    }

    //HAY QUE HACER LA VALIDACIÓN DE LOS DATOS

    (!this.sessionOption ? await this.authentication.logInEmail(mail,password)
    : await this.authentication.registerUserEmail(name,mail,password));
    sessionStorage.setItem("logged","true");
    this.redirect();
  }

  logOut(){
    this.authentication.logOut();
  }
}
