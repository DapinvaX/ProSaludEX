import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:3000/api/usuarios'; // URL del backend

  constructor(private http: HttpClient) {}

  crearUsuario(usuario: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/crear`, usuario);
  }

  obtenerUsuarios(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/obtener`);
  }

}
