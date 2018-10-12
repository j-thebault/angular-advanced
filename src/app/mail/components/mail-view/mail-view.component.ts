import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Mail} from '../../models/mail.interface';
import {pluck} from 'rxjs/internal/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-mail-view',
  template: `
    <div class="mail-view">
      <h2>{{(message | async).from}}</h2>
      <p>{{(message | async).full}}</p>
    </div>
  `,
  styleUrls: ['./mail-view.component.scss']
})
export class MailViewComponent implements OnInit {

  message: Observable<Mail> = this.activatedRoute.data.pipe(
    pluck('message')
  );

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }

}
