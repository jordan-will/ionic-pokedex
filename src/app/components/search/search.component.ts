import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: false
})
export class SearchComponent {

  search: string = '';
  constructor(
    private apiService: ApiService,
    private message: MessageService,
    private router: Router
  ) { }

  searchPokemon() {
    if (!this.search) return;
    this.apiService.getPokemonByName(this.search.toLocaleLowerCase()).subscribe((res) => {
      if (res.id) {
        this.router.navigate(['/detail', res.id]);
        this.search = '';
      } else {
        console.error('Pokemon not found');
        this.message.presentToast('Pokémon não encontrado')
      }
    })
  }

}
