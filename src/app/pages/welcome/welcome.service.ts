import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WelcomeService {
  tittle: string = 'Welcome to my app';

  // creamos una variable que contendra el path de nuestro archivo json que esta en la carpeta assets
  private jsonURL = 'assets/my_data.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.jsonURL);
  }
}
