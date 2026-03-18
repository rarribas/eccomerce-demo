import { Component, input, computed } from '@angular/core';
import { required } from '@angular/forms/signals';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  id = input.required<string>();
  title = input.required<string>();
  miniDescription = input.required<string>();
  price = input.required<number>();
  imageUrl = input.required<string>();  

  productUrl = computed(() => `/products/${this.id()}`);  
}
