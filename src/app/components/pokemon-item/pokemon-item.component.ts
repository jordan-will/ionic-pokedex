import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss'],
  standalone: false
})
export class PokemonItemComponent {

  @Input() id!:string|number;
  @Input() name!:string;
  @Input() sprite!:string;
  @Input() fromFavorite:boolean = false;

  @Output() removeFavorite = new EventEmitter<any>();

  onButtonClick(event:any): void {
    event.stopPropagation();
    event.preventDefault();
    this.removeFavorite.emit();
  }

}
