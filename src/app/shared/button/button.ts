import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Output() click = new EventEmitter<void>();

  onClick() {
    this.click.emit();
  }
}
