import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list.html',
  styleUrls: ['./list.css']
})
export class ListComponent {
  newItem: string = '';
  items: string[] = [];

  addItem(): void {
    if (this.newItem.trim() !== '') {
      this.items.push(this.newItem.trim());
      this.newItem = ''; // wyczyszczenie pola po dodaniu
    }
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }
}
