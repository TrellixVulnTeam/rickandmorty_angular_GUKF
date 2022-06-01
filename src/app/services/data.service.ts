import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocationModel } from '../core/models/location.interface';
import { CharacterModel } from '../core/models/character.interface';
import { EpisodeModel } from '../core/models/episode.interface';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl: any = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getApiUrl(){
    return this.apiUrl;
  } 
  //Funcion Observable
  getDataApiCharacter():Observable<any>{
    return this.http.get<CharacterModel[]>(`${this.apiUrl}/character`);
  } 
  getDataApiLocation():Observable<any>{
    return this.http.get<LocationModel[]>(`${this.apiUrl}/location/`);
  } 
  getDataApiEpisode():Observable<any>{
    return this.http.get<EpisodeModel[]>(`${this.apiUrl}/episode/`);
  } 
  /*  getCharacters(id: string) {
    return this.http.get(`${this.apiUrl}/character/${id}`);
  }  */
  /* getLocations(id: string){
    return this.http.get(`${this.apiUrl}/location/`);
  }  */ 
  getCharacterByLocation(id: string){
    return this.http.get(`${this.apiUrl}/location/${id}`);
  }
 /*  getEpisodes(id: string){
    return this.http.get(`${this.apiUrl}/episode/`);
  }   */
  getEpisodeByLocation(id: string){
    return this.http.get(`${this.apiUrl}/episode/${id}`);
  }

}

