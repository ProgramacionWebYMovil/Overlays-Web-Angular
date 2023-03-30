import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  //Explore section
  title_explore: String = "Explore";
  text_explore1: String = "prueba";
  text_explore2: String = "prueba";
  text_explore3: String = "prueba";
  text_explore4: String = "prueba";

  //Follow section
  title_follow: String = "Follow";
  text_instagram: String = "prueba";
  text_youtube: String = "prueba";
  text_tiktok: String = "prueba";
  text_facebook: String = "prueba";

  //Form section
  title_form: String = "Form";
  text_email: String = "email";
  text_name: String = "name";
  text_message: String = "message";

  //Copyright section
  text_copyright1: String = "Privac";
  text_copyright2: String = "Privac";
  text_copyright3: String = "Privac";

}
