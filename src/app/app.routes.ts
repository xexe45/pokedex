import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pokedex',
    loadComponent: () => import('./pokedex/pages/pokedex/pokedex.component')
  },
  {
    path: 'pokedex/:pokemon',
    loadComponent: () => import('./pokedex/pages/pokemon/pokemon.component')
  },
  {
    path: '',
    redirectTo: 'pokedex',
    pathMatch: 'full'
  }
];
