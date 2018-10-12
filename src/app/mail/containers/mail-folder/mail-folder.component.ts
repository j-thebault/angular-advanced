import {Component} from '@angular/core';

import {Mail} from '../../models/mail.interface';
import {ActivatedRoute, Data} from '@angular/router';
import {Observable} from 'rxjs';
import {pluck} from 'rxjs/internal/operators';

@Component({
  selector: 'app-mail-folder',
  styleUrls: ['mail-folder.component.scss'],
  template: `
    <h2>{{title | async}}</h2>
    <app-mail-item
      *ngFor="let message of messages|async"
      [message]="message">
    </app-mail-item>
  `
})
export class MailFolderComponent {
  title: Observable<String> = this.route.params.pipe(
    pluck('name')
  );

  messages: Observable<Mail[]> = this.route.data.pipe(
    pluck('messages')
  );

  constructor(private route: ActivatedRoute) {

  }
}
