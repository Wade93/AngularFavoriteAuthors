import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthorNewComponent } from './authors/author-new/author-new.component';
import { AuthorInfoComponent } from './authors/author-info/author-info.component';
import { AuthorListComponent } from './authors/author-list/author-list.component';
import { AuthorEditComponent } from './authors/author-edit/author-edit.component';
import { AuthorResolver } from './resolvers';

import { HttpClientModule } from '@angular/common/http'
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorListComponent,
    AuthorNewComponent,
    AuthorInfoComponent,
    NavComponent,
    AuthorEditComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthorResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
