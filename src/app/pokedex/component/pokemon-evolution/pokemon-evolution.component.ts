import { Subscription } from 'rxjs';
import { Evolution } from './../../interfaces/api-pokedex-evolution-response.interface';
import { PokedexService } from './../../services/pokedex.service';
import { Component, input, effect, inject, signal, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-pokemon-evolution',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-evolution.component.html',
  styleUrl: './pokemon-evolution.component.css'
})
export class PokemonEvolutionComponent implements OnDestroy{

  private pokedexService = inject(PokedexService);
  public subscription: Subscription = new Subscription();
  public evolutionUrl = input.required<string>();
  public evolutionChain = signal<Evolution>({} as Evolution);

  public evolutionEffect = effect(() => {
    this.subscription = this.pokedexService.getEvolutionChain(this.evolutionUrl())
    .subscribe({
      next: (data) =>  {
        this.evolutionChain.set(data);
        console.log(this.evolutionChain());
      },
      error: (err) => {
        console.log('error', err)
      }
    })
  });

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
