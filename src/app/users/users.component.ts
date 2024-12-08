import { Component, signal, computed, Input, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { CardComponent } from "../shared/card/card.component";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CardComponent, CardComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter(); 

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectedUser (){
    this.select.emit(this.user.id);
  }
}
