import { Component, Input } from '@angular/core';
import { RandomService } from '../random';

@Component({
  selector: 'app-random',
  standalone: true,
  templateUrl: './random.html',
  styleUrls: ['./random.css']
})
export class RandomComponent {
  @Input() max: number = 100; // domyślna wartość maksymalna

  randomNumber: number = 0;
  comment: string = '';
  commentColor: string = 'black';

  constructor(private randomService: RandomService) {}

  generateRandom(): void {
    this.randomNumber = this.randomService.getRandom(this.max);

   
    if (this.randomNumber <= 0.5 * this.max) {
      this.comment = 'Liczba jest mniejsza lub równa połowie liczby ustalonej jako maksymalna';
      this.commentColor = 'green';
    } else {
      this.comment = 'Liczba jest większa niż połowa ustalonej liczby maksymalnej';
      this.commentColor = 'red';
    }
  }
}
