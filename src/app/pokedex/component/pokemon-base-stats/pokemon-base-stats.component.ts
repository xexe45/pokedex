import { CommonModule } from '@angular/common';
import { Stat } from './../../interfaces/api-pokemon-reponse.interface';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-pokemon-base-stats',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './pokemon-base-stats.component.html',
  styleUrl: './pokemon-base-stats.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonBaseStatsComponent {
  public stats = input.required<Stat[]>();
}
