import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { environment } from '../environments/environment';
import * as fromAuthors from './authors';

const enableTracing = false && !environment.production;

const routes: Routes = [
  {
    path: '',
    redirectTo: 'authors',
    pathMatch: 'full',
  },
  {
    path: 'authors',
    children: [
      {
        path: '',
        component: fromAuthors.AuthorListComponent,
      },
      {
        path: 'new',
        component: fromAuthors.AuthorNewComponent,
      },
      {
        path: ':id',
        component: fromAuthors.AuthorInfoComponent,
      },
      {
        path: ':id/edit',
        component: fromAuthors.AuthorEditComponent
      }
    ],
  },
  {
    path: '**',
    redirectTo: 'authors',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing,
  }),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
