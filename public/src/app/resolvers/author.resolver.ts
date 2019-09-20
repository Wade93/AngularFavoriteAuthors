import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { HttpService } from '../services/http.service';
import { Author } from '../models/author';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorResolver implements Resolve<Author[]> {
  constructor(private readonly httpService: HttpService) {}

  resolve(): Observable<Author[]> {
    return this.httpService.getAuthors();
  }
}
