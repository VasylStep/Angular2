import {Component} from '@angular/core';
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [];
  title = 'Angular';
  chatik = 'With micro';
  me = 'me'

  constructor(private userService: UserService) {
    userService.getUsers().subscribe(jsonUsers => {
      this.users = jsonUsers
    })

  }
}
