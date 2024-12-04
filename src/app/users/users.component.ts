import { Component, signal, computed, Input, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  @Input() id!: string;
  @Input() avatar!: string;
  @Input() name!: string;

  @Output() select = new EventEmitter(); 

  get imagePath(){
    return 'assets/users/' + this.avatar;
  }

  onSelectedUser (){
    this.select.emit(this.id);
  }
}
