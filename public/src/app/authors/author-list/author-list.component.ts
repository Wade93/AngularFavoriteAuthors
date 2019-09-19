import { Component, OnInit } from '@angular/core';
import { Author } from '../../models/author'
import { HttpService } from 'src/app/services/http.service.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  selectedAuthor: Author;
  authors: Author[];

  constructor(
    private readonly httpService: HttpService, 
    private readonly router: Router
    ) { }

  ngOnInit() {
    this.httpService.getAuthors().subscribe(authors => {
      this.authors = authors;
      console.log("Got authors")
      console.log(authors);
    })
  }

  onDelete(id){
    this.httpService.deleteAuthor(id).subscribe(author => {
      console.log(author);
      this.router.navigateByUrl('/');
    })
  }

}
