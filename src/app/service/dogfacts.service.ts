import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';



export interface DogFact {
    id: string;
    type: string;
    attributes: {
        body: string;
    }
}

interface DogFactResponse {
    data: Array<DogFact>
}

@Injectable()
export class DogFactService {

    private baseURL = 'https://dogapi.dog/api/v2';

    constructor(private http: HttpClient) { }

    
    getFact(): Observable<DogFact> {
        return this.http.get<DogFactResponse>(`${this.baseURL}/facts`).pipe(map(response => response.data[0]))
    }
}