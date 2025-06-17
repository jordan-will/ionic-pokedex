import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

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
    public apiService: ApiService
  ) { }

  ionViewWillEnter() {
    const pokemonId = this.route.snapshot.paramMap.get('id');
    console.log('Pokemon ID:', pokemonId);

    this.apiService.getPokemoDetail(Number(pokemonId))
      .subscribe((pokemon) => {
        console.log('POKEMON DETAIL', pokemon);
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

}
