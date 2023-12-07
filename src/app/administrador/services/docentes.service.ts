import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocentesService {

  private readonly baseUrl: string = environment.baseUrl;
  private http = inject( HttpClient );

  constructor() { }

  agregarDocente( data: any ) {
    const url  = `${ this.baseUrl }/docentes`;
    return this.http.post(url, data);
  }

  obtenerDocentes(): Observable<any[]> {
    const url  = `${ this.baseUrl }/docentes`;
    return this.http.get<any[]>(url);
  }
}
