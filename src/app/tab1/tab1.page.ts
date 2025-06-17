import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page{

  public pokemonList:any[] = []
  public offset: number = 0;
  public limit: number = 20;

  constructor(public apiService: ApiService) {}

  ionViewWillEnter() {
    this.loadPokemons();
  }

  loadPokemons(event?: any) {
    this.apiService.getPokemons(this.limit, this.offset)
      .subscribe(
        (pokemons: any) => {
          this.pokemonList = [...this.pokemonList, ...pokemons];
          this.offset += this.limit;

          if (event) {
            event.target.complete();
          }

          if (pokemons.results.length < this.limit && event) {
            event.target.disabled = true;
          }
        },

        (error) => {
          console.error('Error fetching pokemons:', error);
          if (event) {
            event.target.complete();
          }
        }
      );
  }

  loadData(event: any) {
    this.loadPokemons(event);
  }


  // ionViewWillEnter() {
  //   this.apiService.getPokemons()
  //   .subscribe((pokemons) => {
  //     console.log('POKE LIST', pokemons);
  //     this.pokemonList = [...pokemons]
  //   }, (error) => {
  //     console.error('Error fetching pokemons:', error);
  //   })
  // }

}
