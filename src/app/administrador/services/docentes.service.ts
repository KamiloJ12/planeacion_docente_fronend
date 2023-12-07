import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocentesService {

  private readonly baseUrl: string = `${environment.baseUrl}/docentes`;
  private http = inject( HttpClient );

  constructor() { }

  agregarDocente( data: any ) {
    const url  = this.baseUrl;
    return this.http.post(url, data);
  }

  obtenerDocentes(): Observable<any[]> {
    const url  = this.baseUrl;
    return this.http.get<any[]>(url);
  }

  editarDocentes( id: number, data: any ): Observable<any[]> {
    const url = `${ this.baseUrl }/${ id }`;
    return this.http.patch<any>( url, data);
  }

  deleteDocentes( id: number ): Observable<any[]> {
    const url = `${ this.baseUrl }/${ id }`;
    return this.http.delete<any>( url );
  }
}
