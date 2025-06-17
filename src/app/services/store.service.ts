import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private getListFavorites(): any[] {
    const favorites = localStorage.getItem(environment.FAVORITES_KEY);
    if (favorites) {
      try {
        return JSON.parse(favorites);
      } catch (error) {
        return [];
      }
    }
    return [];
  }

  private setListFavorites(favorites: any[]): void {
    localStorage.setItem(environment.FAVORITES_KEY, JSON.stringify(favorites));
  }

  public getFavorites(): any[] {
    return this.getListFavorites();
  }

  public addFavorite(pokemon: any): void {
    const favorites = this.getListFavorites();
    if (!favorites.some(item => item.id === pokemon.id)) {
      favorites.push(pokemon);
      this.setListFavorites(favorites);
    }
  }

  public removeFavorite(pokemonId: number | string): void {
    let favorites = this.getListFavorites();
    favorites = favorites.filter(item => item.id !== pokemonId);
    this.setListFavorites(favorites);
  }
}
