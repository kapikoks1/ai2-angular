import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../services/person';
import { Person } from '../../models/person';

@Component({
  selector: 'app-person-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './person-form.html',
  styleUrls: ['./person-form.css']
})
export class PersonFormComponent {
  person: Person = { firstName: '', lastName: '', age: 0 };
  id?: number;

  constructor(private service: PersonService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.service.getById(this.id).subscribe(data => this.person = data);
    }
  }

  save(): void {
    if (this.id) {
      this.service.update(this.id, this.person).subscribe(() => this.router.navigate(['/people']));
    } else {
      this.service.create(this.person).subscribe(() => this.router.navigate(['/people']));
    }
  }
}
