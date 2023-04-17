import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Overlays-Web-Angular';

  constructor(){
    //this.checkLanguage();
  }

  ngOnInit(){
    this.checkLanguage()
  }

  /*METODO PARA COMPROBAR EL LENGUAJE DEL USUARIO
   * 1) Comprueba el idioma del usuario
   * 2) Lo guarda en el localStorage
   */
  private checkLanguage(){
    if(!localStorage.getItem("language")){
      let language = window.navigator.language;

      language.includes("en") ?
      localStorage.setItem("language","PageContentEnglish"):
      localStorage.setItem("language","PageContentSpanish");
    }
  }


}
