// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonItemComponent } from './pokemon-item.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PokemonItemComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [PokemonItemComponent] 
})
export class PokemonItemModule { }