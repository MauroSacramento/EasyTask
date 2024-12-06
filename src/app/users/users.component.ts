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
  @Input({required: true}) user!: {
    id: string,
    avatar: string,
    name: string
  }

  @Output() select = new EventEmitter(); 

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectedUser (){
    this.select.emit(this.user.id);
  }
}
