import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { of, Observable } from 'rxjs';
import { Author } from '../../../../server/models/author';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  createAuthor(author: Author): Observable<Author>{
    return this.http.post<Author>("/authors", author);
  }

  getAuthor(id: string): Observable<Author>{
    return this.http.get<Author>(`/authors/${id}`);
  }

  updateAuthor(author: Author): Observable<Author>{
    return this.http.put<Author>(`authors/${author._id}`, author);
  }

  deleteAuthor(id: string): Observable<Author>{
    return this.http.delete<Author>(`authors/${id}`);
  }

  getAuthors(): Observable<Author[]>{
    console.log("Getting Authors")
    return this.http.get<Author[]>('/authors');
  }

}
