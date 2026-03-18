import { Component, input, Input } from '@angular/core';
import { required } from '@angular/forms/signals';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input({required: true}) id: string = '';
  @Input({required: true}) title: string = '';
  @Input({required: true}) miniDescription: string = '';
  @Input({required: true}) price: number = 0;
  @Input({required: true}) imageUrl: string = '';
}
