import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from '../Person/person';
import { PersonService } from '../person';

@Component({
  selector: 'app-add-person',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-person.html',
})
export class AddPersonComponent {
  person: Person = { address: {} };

  constructor(private personService: PersonService, private router: Router) {}

  save() {
    this.personService.addPerson(this.person);
    this.router.navigate(['/']);
  }
}
