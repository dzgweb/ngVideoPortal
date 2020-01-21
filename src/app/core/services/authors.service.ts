import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthorOptions } from '../../courses/models';
import { AUTHORS_ENDPOINT } from './../config';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<AuthorOptions[]> {
    return this.http.get<AuthorOptions[]>(AUTHORS_ENDPOINT);
  }

}
