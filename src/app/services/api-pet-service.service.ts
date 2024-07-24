import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPetServiceService {

  private apiUrl = 'http://localhost:1234'; // Cambia esto a la URL de tu API

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify({ email, password });

    return this.http.post(`${this.apiUrl}/login`, body, { headers }).pipe(
      map(response => {
        // Aquí puedes manejar la respuesta de la API
        return response;
      })
    );
  }

  getMascotas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/mascotas`).pipe(
      map(response => {
        return response;
      })
    );
  }

  getMascotaById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/mascotas/${id}`).pipe(
      map(response => {
        return response;
      })
    );
  }

  addMascota(mascota: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(mascota);

    return this.http.post(`${this.apiUrl}/mascotas`, body, { headers }).pipe(
      map(response => {
        return response;
      })
    );
  }
}
