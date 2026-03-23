import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  imports: [FormsModule],
  templateUrl: './search-input.html',
  styleUrl: './search-input.css',
})
export class SearchInput {
  searchValue = '';
  @Output() search = new EventEmitter<string>();
  @Input() placeholder = 'Search...';

  onButtonClick() {
    console.log('Search for:', this.searchValue);
    this.search.emit(this.searchValue);
  }
}
