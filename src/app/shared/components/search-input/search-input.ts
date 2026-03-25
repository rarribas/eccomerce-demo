import { Component, EventEmitter, input, signal, output, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-search-input',
  imports: [FormsModule, MatIconModule],
  templateUrl: './search-input.html',
  styleUrl: './search-input.css',
})
export class SearchInput {
  search = output<string>();
  initialSearchValue = input<string>('');
  placeholder = input<string>('Search...');
  searchValue = signal<string>(this.initialSearchValue());
  
  // Note: when using signals it doesn't seem to work well when using signals as inputs
  // in 2 way binding. Instead, I created a new initialSearchValue variable that will be 
  // an input set by the parent, and I'll use a effect to reset the searchValue signal whenever the initialSearchValue changes. This way, when the parent component updates the initialSearchValue, the searchValue signal will be updated accordingly, and the input field will reflect the new value.
  constructor() {
    effect(() => {
      this.searchValue.set(this.initialSearchValue());
    });
  }

  onButtonClick() {
    this.search.emit(this.searchValue());
  }
}
