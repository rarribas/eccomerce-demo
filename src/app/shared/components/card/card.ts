import { Component, input, Input } from '@angular/core';
import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input({required: true}) title: string = '';
  @Input({required: true}) miniDescription: string = '';
  @Input({required: true}) price: number = 0;
  @Input({required: true}) imageUrl: string = '';
}
