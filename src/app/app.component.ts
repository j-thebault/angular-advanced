import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <header>
        <img src="../assets/logo.svg">
      </header>
      <div class="app__content">
        <nav>
          <!-- giving hint for the router to navigate to multiple outlet screen.
           pane : null will ensure that no inner component is rendered -->
          <a
          [routerLink]="[{outlets: {primary: 'folder/inbox', pane:null}}]"
          routerLinkActive="active"
          >
          Inbox
          </a>
          <a
            [routerLink]="[{outlets: {primary: 'folder/trash', pane:null}}]"
            routerLinkActive="active">
            Trash
          </a>
        </nav>
        <app-mail-app></app-mail-app>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event);
      }
    });
  }
}
