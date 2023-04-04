import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-overlay',
  templateUrl: './card-overlay.component.html',
  styleUrls: ['./card-overlay.component.css']
})
export class CardOverlayComponent {
  //@Input() overlay_name!: string;
  //@Input() overlay_description!: string;
  //@Input() overlay_image!: string;
  @Input() overlay:any;
}
