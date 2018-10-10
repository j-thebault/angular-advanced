import {Component, Input, OnInit} from '@angular/core';

interface TooltipOptions {
  text: string;
}

@Component({
  selector: 'app-span-tooltip',
  template: `
    <span [appTooltip]="tooltipOptions.text" #myToolTip="tooltip" (mouseover)="myToolTip.show()" (mouseleave)="myToolTip.hide()">
      (?)
    </span>
  `,
  styleUrls: ['./span-tooltip.component.css']
})
export class SpanTooltipComponent implements OnInit {

  @Input()
  tooltipOptions: TooltipOptions;

  constructor() {
  }

  ngOnInit() {
  }

}
