import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  name = 'question';

  constructor(private user: UserService) { }

  ngOnInit() {
    this.name = this.user.username;
    console.log('Is user logged in? ', this.user.getUserLoggedIn());
  }

}
