import { Component } from '@angular/core';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  cardNumber: string = '';

  formatCardNumber() {
    // Eliminar los espacios en blanco del número de tarjeta
    this.cardNumber = this.cardNumber.replace(/\s/g, '');

    // Agregar espacios en blanco después de cada 4 dígitos
    this.cardNumber = this.cardNumber.replace(/(.{4})/g, '$1 ');
  }

}
