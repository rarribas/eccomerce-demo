import { Component, signal, output, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryId } from '../../../features/products/products.model';
@Component({
  selector: 'app-select',
  imports: [FormsModule],
  templateUrl: './select.html',
  styleUrl: './select.css',
})
export class Select {
  optionType = input.required<string>();
  options = input.required<{ id: string; label: string }[]>();
  initialSelectedOptionId = input<CategoryId | ''>('');
  selectedOptionId = signal<CategoryId | ''>(this.initialSelectedOptionId());
  optionSelected = output<CategoryId | ''>();

  onOptionChange(selectedId: CategoryId | '') {
    this.selectedOptionId.set(selectedId);
    this.optionSelected.emit(this.selectedOptionId());
  }
}
