import { PokemonInfo } from './../interfaces/api-pokemon-reponse.interface';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Pokemon, Pokedex } from './../interfaces/api-pokedex-response.interface';
import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private http = inject(HttpClient);
  private apiUrl: string = `${environment.apiUrl}`;
  private pokedexResponse = signal<Pokedex>({} as Pokedex);
  public totalItems = computed(() => this.pokedexResponse().count);
  public nextItems = computed(() => this.pokedexResponse().next);
  public previousItems = computed(() => this.pokedexResponse().previous);
  public pokedex = computed(() => this.pokedexResponse().results);

  constructor() {
    const url: string = `${this.apiUrl}/pokemon`;
    this.getPokedex(url).subscribe();
  }

  private setPokedex(pokedex: Pokedex): boolean {
    this.pokedexResponse.set(pokedex);
    return true;
  }

  public getPokedex(url: string): Observable<boolean> {
    return this.http.get<Pokedex>(url)
      .pipe(
        map(response => this.setPokedex(response)),
        catchError( () => of(false))
      )
  }

  public nextPokedex() : Observable<boolean> {
    return this.getPokedex(this.nextItems());
  }

  public previousPokedex() : Observable<boolean> {
    return this.getPokedex(this.previousItems());
  }

  public getPokemonByIdOrName(query: string): Observable<PokemonInfo> {
    const url: string = `${this.apiUrl}/pokemon/${query}`;
    return this.http.get<PokemonInfo>(url);
  }
}
