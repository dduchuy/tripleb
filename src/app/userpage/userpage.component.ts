import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  
  name = "question";
  
  constructor(private user: UserService) { }

  ngOnInit() {
    this.name = this.user.username;
    console.log('Is user logged in? ', this.user.getUserLoggedIn());
  }

}
