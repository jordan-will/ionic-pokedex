import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {

  constructor(
    public apiService: ApiService
  ) {}

  ngOnInit() {
    this.apiService.getPokemons(5)
    .subscribe((pokemons) => {
      console.log('POKE LIST', pokemons);
    });
  }

}
