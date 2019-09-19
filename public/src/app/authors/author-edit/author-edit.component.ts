import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Author } from '../../models/author';
import { HttpService } from 'src/app/services/http.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {
  @Input()
  author: Author;

  @Output()
  editAuthor = new EventEmitter<Author>();

  constructor(
    private readonly httpService: HttpService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('id')),
        switchMap(id => 
          this.httpService.getAuthor(id))
      )
      .subscribe(author => {
        console.log('got author', author);
        this.author = author;
      });
    }

  onEdit(author: Author){
    event.preventDefault();
    this.httpService.updateAuthor(author).subscribe(author =>{
      console.log('updated author', author);
      this.router.navigateByUrl('');
    })
  }

}
