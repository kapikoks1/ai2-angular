import { Routes } from '@angular/router';
import { ListComponent } from './list/list';
import { AddPersonComponent } from './add-person/add-person';
import { DetailsComponent } from './details/details';
import { NotFoundComponent } from './not-found/not-found';

export const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'add', component: AddPersonComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: '**', component: NotFoundComponent },
];
