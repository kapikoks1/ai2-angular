import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Person } from '../Person/person';
import { PersonService } from '../person';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule, MatListModule, MatButtonModule, MatIconModule],
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

  trackByIndex(index: number, item: Person) {
    return index;
  }
}
