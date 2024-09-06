import { PokedexService } from './../../services/pokedex.service';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export default class PokemonComponent {
  private pokedexService = inject(PokedexService);
  private route = inject(ActivatedRoute)
  public pokemon = toSignal(
    this.route.params.pipe(
      switchMap(({ pokemon }) => this.pokedexService.getPokemonByIdOrName(pokemon))
    )
  );
}
