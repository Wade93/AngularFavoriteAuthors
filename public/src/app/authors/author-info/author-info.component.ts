import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { HttpService } from '../../services/http.service';
import { Author } from '../../models/author';

@Component({
  selector: 'app-author-info',
  templateUrl: './author-info.component.html',
  styleUrls: ['./author-info.component.css']
})
export class AuthorInfoComponent implements OnInit {
  @Input()
  author: Author;

  constructor(
    private readonly httpService: HttpService,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap
    .pipe(
      map(params => params.get('id')),
      switchMap(id => this.httpService.getAuthor(id))
    )
    .subscribe(author => {
      console.log("got author", author);
      this.author = author;
    })
  }
}
