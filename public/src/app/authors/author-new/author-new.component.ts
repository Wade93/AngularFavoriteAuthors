import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Author } from '../../models/author';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-author-new',
  templateUrl: './author-new.component.html',
  styleUrls: ['./author-new.component.css']
})
export class AuthorNewComponent implements OnInit {
  author = new Author();

  @Output()
  createAuthor = new EventEmitter<Author>();

  constructor(
    private readonly httpService: HttpService,
    private readonly router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    this.httpService.createAuthor(this.author).subscribe(createdAuthor => {
      console.log('created Author', createdAuthor);
      this.author = new Author();
      form.reset();
      this.router.navigateByUrl('/');
    });
  }

}
