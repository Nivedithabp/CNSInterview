import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Row, Structure } from '../model/interface/structure';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnatomicalStructuresService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  fetchAnatomicalStructures(): Observable<Structure[]> {
    return this.http.get<{ data: Row[] }>(this.apiUrl).pipe(
      map(response => {
        const structures = response.data.flatMap(row => row.anatomical_structures);
        // Filter unique structures by name
        const uniqueStructures = Array.from(new Map(structures.map(s => [s.name, s])).values());
        return uniqueStructures;
      })
    );
  } 

}
