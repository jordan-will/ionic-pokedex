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
            sprite: `${environment.SPRITe_URL}${id}.png`
          };
        })
        return pokemonList;
      })
    )   
  }

}
