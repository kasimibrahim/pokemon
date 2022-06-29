import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url  = 'https://pokeapi.co/api/v2/pokemon/';
  private pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/sprites';
  constructor(private httpClient: HttpClient) { }

  getPokemon(){
    return this.httpClient.get(this.url)
  }
}
