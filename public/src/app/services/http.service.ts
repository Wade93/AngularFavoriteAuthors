import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Author } from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly base = '/api/authors';

  constructor(private http: HttpClient) {}

  createAuthor(author: Author): Observable<Author>{
    return this.http.post<Author>(this.base, author);
  }

  getAuthor(id: string): Observable<Author>{
    return this.http.get<Author>(`${this.base}/${id}`);
  }

  updateAuthor(author: Author): Observable<Author>{
    return this.http.put<Author>(`${this.base}/${author._id}`, author);
  }

  deleteAuthor(id: string): Observable<Author>{
    return this.http.delete<Author>(`${this.base}/${id}`);
  }

  getAuthors(): Observable<Author[]>{
    return this.http.get<Author[]>(this.base);
  }

}
