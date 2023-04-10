import { Component } from '@angular/core';
import { LoadContentService } from 'src/app/services/load-content/load-content.service';
import { Payment } from "../../interfaces/pagesContents.interface";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  cardNumber: string = '';
  pageContent:Payment = {}

  constructor(private load:LoadContentService) {}

  ngOnInit(){
    this.load.loadContent("payment").then(data=> this.pageContent=data);
  }

  formatCardNumber() {
    // Eliminar los espacios en blanco del número de tarjeta
    this.cardNumber = this.cardNumber.replace(/\s/g, '');

    // Agregar espacios en blanco después de cada 4 dígitos
    this.cardNumber = this.cardNumber.replace(/(.{4})/g, '$1 ');
  }

}
