import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss'],
  standalone: false
})
export class PokemonItemComponent  implements OnInit {

  @Input() id!:string|number;
  @Input() name!:string;
  @Input() sprite!:string;

  constructor() { }

  ngOnInit() {}

}
