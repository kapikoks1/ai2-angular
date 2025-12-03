import { Injectable } from '@angular/core';
import { Person } from './Person/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private storageKey = 'persons';

  getAll(): Person[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  getByIndex(index: number): Person | null {
    const persons = this.getAll();
    return persons[index] || null;
  }

  addPerson(person: Person): void {
    const persons = this.getAll();
    persons.push(person);
    localStorage.setItem(this.storageKey, JSON.stringify(persons));
  }

  deleteByIndex(index: number): void {
    const persons = this.getAll();
    persons.splice(index, 1);
    localStorage.setItem(this.storageKey, JSON.stringify(persons));
  }
}
