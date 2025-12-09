import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonService } from '../../services/person';
import { Person } from '../../models/person';
import { Router } from '@angular/router';

@Component({
  selector: 'people-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './people-list.html',
  styleUrls: ['./people-list.css']
})
export class PeopleListComponent implements OnInit {

  people: Person[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor(private service: PersonService, public router: Router) {}

  ngOnInit(): void {
    this.loadPeople();
  }

  loadPeople(): void {
    this.loading = true;
    this.error = null;

    this.service.getAll().subscribe({
      next: data => {
        this.people = data;
        this.loading = false;
        console.log('ODEBRANE DANE:', this.people);
      },
      error: err => {
        console.error('Błąd pobierania osób:', err);
        this.error = 'Nie udało się pobrać listy osób.';
        this.loading = false;
      }
    });
  }

  deletePerson(id?: number): void {
    if (!id) return;
    if (confirm('Czy na pewno chcesz usunąć tę osobę?')) {
      this.service.delete(id).subscribe({
        next: () => this.loadPeople(),
        error: err => {
          console.error('Błąd usuwania osoby:', err);
          alert('Nie udało się usunąć osoby.');
        }
      });
    }
  }

  editPerson(id?: number): void {
    if (!id) return;
    this.router.navigate(['/people/edit', id]);
  }

  addPerson(): void {
    this.router.navigate(['/people/new']);
  }
}
