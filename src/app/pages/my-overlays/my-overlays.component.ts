import { Component } from '@angular/core';
import { checkLogged } from 'src/app/services/check-is-logged/check-is-logged.service';

@Component({
  selector: 'app-my-overlays',
  templateUrl: './my-overlays.component.html',
  styleUrls: ['./my-overlays.component.css']
})
export class MyOverlaysComponent {

  ngOnInit(){
    //esto no puede ser asi
    checkLogged()==true ? console.log("logueado") : console.log("no logueado");
  }

  overlays:any[] = [{
    image:"pepe",
    name:"pepe",
    date:"1/1/2000"
  },
  {
    image:"pepe2",
    name:"pepe2",
    date:"Oct 5, 2023"
  }];

  //console.log(array.sort((a, b) => new Date(a.fechas).getTime() > new Date(b.fechas).getTime()));
}
