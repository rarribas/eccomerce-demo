import { Component, Input, Output, EventEmitter, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryId } from '../../../features/products/products.model';
@Component({
  selector: 'app-select',
  imports: [FormsModule],
  templateUrl: './select.html',
  styleUrl: './select.css',
})
export class Select {
  @Output() optionSelected = new EventEmitter<CategoryId>();
  @Input({required: true}) optionType: string = '';
  @Input({required: true}) options: { id: string; label: string }[] = [];
  selectedOptionId: CategoryId | '' = '';

  onOptionChange(selectedId: CategoryId) {
    this.selectedOptionId = selectedId;
    this.optionSelected.emit(this.selectedOptionId);
    console.log('Selected option ID:', this.selectedOptionId);
  }
}
