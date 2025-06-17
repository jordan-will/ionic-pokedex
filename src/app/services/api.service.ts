import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { getPokemonId } from '../utils/getPokemonId';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getPokemons(limit: number = 20, offset: number = 0): Observable<any> {
    return this.http.get<any>(`${environment.BASE_URL}pokemon?limit=${limit}&offset=${offset}`)
    .pipe(
      map((res)=>{
        const results = res.results;
        const pokemonList = results.map((pokemon: any) => {
          const id = getPokemonId(pokemon.url);
          return {
            ...pokemon,
            id: id,
            sprite: `${environment.SPRITE_URL}${id}.png`
          };
        })
        return pokemonList;
      })
    )   
  }

  getPokemoDetail(pokemonId:number): Observable<any> {
    return this.http.get<any>(`${environment.BASE_URL}pokemon/${pokemonId}/`)
    .pipe(
      map((res)=>{
        console.log('RES DETAIL ', res);
        const weight = res.weight
        const height = res.height;
        const abilities = res.abilities.map((ability: any) => ability.ability.name);
        const cries = res.cries.latest || res.cries.legacy || null
        const movies = res.moves.map((move: any) => move.move.name).slice(0,5); 
        const sprites = {
          front_default: res.sprites.front_default,
          front_shiny: res.sprites.front_shiny || null,
        } 
        const types = res.types.map((type: any) => type.type.name);
        const stats = res.stats.map((stat: any) => {return {base: stat.base_stat, name: stat.stat.name}});

        return {
          id: res.id,
          name: res.name,
          weight: weight,
          height: height,
          abilities: abilities,
          cries: cries,
          movies: movies,
          sprites: sprites,
          types: types,
          stats: stats
        }
      })
    )   
  }

}
