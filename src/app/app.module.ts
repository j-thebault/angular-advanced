import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MyForDirective} from './my-for/my-for.directive';
import {FileSizePipe} from './file-size/file-size.pipe';

@NgModule({
  declarations: [
    AppComponent, MyForDirective, FileSizePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
