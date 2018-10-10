import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CreditCardDirective} from './credit-card/credit-card.directive';
import {TooltipDirective} from './tooltip/tooltip.directive';
import { SpanTooltipComponent } from './span-tooltip/span-tooltip.component';

@NgModule({
  declarations: [
    AppComponent, CreditCardDirective, TooltipDirective, SpanTooltipComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
