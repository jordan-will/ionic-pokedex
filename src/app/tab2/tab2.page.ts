import { Component } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  public pokemonList: any[] = [];
  constructor(
    public storeService: StoreService
  ) {}

  ionViewWillEnter() {
    this.pokemonList = [...this.storeService.getFavorites()];
  }
  
  removeFromFavorites(event:any, pokemonId: string|number) {
    this.storeService.removeFavorite(pokemonId);
    this.pokemonList = [...this.storeService.getFavorites()];
  }

  
}
