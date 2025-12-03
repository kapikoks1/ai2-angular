import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';        
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Person } from '../Person/person';
import { PersonService } from '../person';   

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule],           
  templateUrl: './details.html',
})
export class DetailsComponent {
  person: Person | null = null;

  constructor(private route: ActivatedRoute, private personService: PersonService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        const index = parseInt(id, 10);
        const p = this.personService.getByIndex(index);
        if (p) this.person = p;
      }
    });
  }
}
