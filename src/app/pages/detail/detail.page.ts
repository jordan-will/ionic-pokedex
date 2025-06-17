import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { MessageService } from 'src/app/services/message.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: false,
})
export class DetailPage {

  public pokemonDetail!: any;

  constructor(
    private readonly route: ActivatedRoute,
    public apiService: ApiService,
    public message: MessageService,
    public storeService: StoreService
  ) { }

  ionViewWillEnter() {
    const pokemonId = this.route.snapshot.paramMap.get('id');
    this.apiService.getPokemoDetail(Number(pokemonId))
      .subscribe((pokemon) => {
        this.pokemonDetail = { ...pokemon }
      })
  }

  playAudio(crie: string) {
    if (!crie) return
    const audio = new Audio(crie);
    audio.play()
    .catch(error =>
      console.error('Erro ao reproduzir o áudio:', error)
    );
  }

  addToFavorite()
  {
    try {
      const pokemon = {
        id: this.pokemonDetail.id,
        name: this.pokemonDetail.name,
        sprite: this.pokemonDetail.sprites.front_default,
      };
      this.storeService.addFavorite(pokemon);
      this.message.presentToast(`${pokemon.name} adicionado aos favoritos!`);
    } catch (error) {
     this.message.presentToast('Pokémon não adicionado. Tente novamente', 3000); 
    }
  }

}
