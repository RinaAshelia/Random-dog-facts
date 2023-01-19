import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

interface DogImageResponse {    
    message: string;
    status: string;
}

@Injectable()
export class DogImageService {

    private baseURL = 'https://dog.ceo/api';

    constructor(private http: HttpClient) { }

    getImage(): Observable<string> {
        return this.http.get<DogImageResponse>(`${this.baseURL}/breeds/image/random`).pipe(map(res => res.message))
    }
}