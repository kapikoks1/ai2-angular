import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { Person } from '../Person/person';
import { PersonService } from '../person';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './list.html',
})
export class ListComponent {
  persons: Person[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.loadPersons();
  }

  loadPersons() {
    this.persons = this.personService.getAll();
  }

  deletePerson(index: number) {
    this.personService.deleteByIndex(index);
    this.loadPersons();
  }
}
