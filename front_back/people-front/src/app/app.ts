import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PeopleListComponent } from './components/people-list/people-list';
import { PersonFormComponent } from './components/person-form/person-form';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PeopleListComponent, PersonFormComponent, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('people-front');
}
