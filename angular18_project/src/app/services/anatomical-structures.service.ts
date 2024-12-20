import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { Row, Structure, StructureDetail } from '../model/interface/structure';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnatomicalStructuresService {
  private apiUrl = environment.apiUrl;
  private detailApiUrl = '/ols/api/ontologies/uberon/terms?iri=http://purl.obolibrary.org/obo/';

  constructor(private http: HttpClient) { }
  // PHASE I 
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

  // PHASE II
  getStructureDetails(id: string): Observable<StructureDetail> {
    const iri = `${this.detailApiUrl}${id.replace(':', '_')}`;
    console.log('Fetching structure details for ID:', id, 'with IRI:', iri);
    return this.http.get<any>(iri).pipe(
      map((response) => {
        console.log('API response for structure details:', response);
        const term = response?._embedded?.terms?.[0];
        const details = {
          name: term?.label || 'No name available',
          description: term?.description?.[0] || 'No description available',
          ontologyLink: term?.obo_id || 'No ontology link available',
          iri: term?.iri || 'No IRI available',
        };
        console.log('Mapped structure details:', details);
        return details;
      }),
      catchError((error) => {
        console.error('Error fetching structure details:', error);
        return throwError(() => new Error('Failed to fetch structure details'));
      })
    );
  }
}
