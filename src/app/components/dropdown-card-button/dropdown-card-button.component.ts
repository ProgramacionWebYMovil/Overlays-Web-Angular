import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-card-button',
  templateUrl: './dropdown-card-button.component.html',
  styleUrls: ['./dropdown-card-button.component.css']
})
export class DropdownCardButtonComponent {
  @Input() buttonsText!:string[];

  @Output() action = new EventEmitter<string>();

  useOverlay(){
    this.action.emit("use");
  }

  editOverlay(){
    this.action.emit("edit");
  }

  deleteOverlay(){
    this.action.emit("delete");
  }
}
