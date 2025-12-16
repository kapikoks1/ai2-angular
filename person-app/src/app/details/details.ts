import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { Person } from '../Person/person';
import { PersonService } from '../person';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, NgIf],
  templateUrl: './details.html',
})
export class DetailsComponent {
  person: Person | null = null;

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id !== null) {
        const index = parseInt(id, 10);
        const p = this.personService.getByIndex(index);
        if (p) this.person = p;
      }
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
