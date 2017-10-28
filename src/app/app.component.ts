import { Component } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isUserLoggedIn : boolean;

  constructor(public authservice : AuthService){
  }

  ngOnInit() {
    this.isUserLoggedIn = this.authservice.isLoggedIn();
  }

  title = 'app';
}
