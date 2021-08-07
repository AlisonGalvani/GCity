import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(public http: HttpClient) { }

  private linkApi = "http://localhost:3000";

  getCities() {
    return this.http.get(`${this.linkApi}/getCity`);
  }

  addCity(newCity:any) {
    return this.http.post(`${this.linkApi}/city`, newCity);
  }

  addCep(newCep:any) {
    return this.http.post(`${this.linkApi}/cep`, newCep);
  }
}