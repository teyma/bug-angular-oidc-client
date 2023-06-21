import { Component, Inject, OnInit } from '@angular/core';
import { AUTHENTICATION } from './authentication/AuthenticationInjection';
import { Authentication } from './authentication/infrastructure/domain/Authentication';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'bug-angular-oidc-client';
  loggedIn = false;

  constructor(
    @Inject(AUTHENTICATION) private readonly authentication: Authentication
  ) {}


  ngOnInit(): void {
    this.authentication.checkAuthAndLogin().then(loggedIn => {
      this.loggedIn = loggedIn;
    });
  }
}
