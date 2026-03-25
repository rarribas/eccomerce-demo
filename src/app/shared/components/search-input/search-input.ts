import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-search-input',
  imports: [FormsModule, MatIconModule],
  templateUrl: './search-input.html',
  styleUrl: './search-input.css',
})
export class SearchInput {
  @Input() searchValue = '';
  @Output() search = new EventEmitter<string>();
  @Input() placeholder = 'Search...';

  onButtonClick() {
    console.log('Search for:', this.searchValue);
    this.search.emit(this.searchValue);
  }
}
