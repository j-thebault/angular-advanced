import {Directive, HostListener, HostBinding, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  exportAs: 'tooltip'
})
export class TooltipDirective implements OnInit {

  tooltipElement = document.createElement('div');
  visible = false;

  @Input()
  set appTooltip(value) {
    this.tooltipElement.textContent = value;
  }

  hide() {
    this.tooltipElement.classList.remove('tooltip--active');
  }

  show() {
    this.tooltipElement.classList.add('tooltip--active');
  }

  // element ref is a ref to the host in derectives
  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.tooltipElement.className = 'tooltip';
    this.element.nativeElement.appendChild(this.tooltipElement);
    this.element.nativeElement.classList.add('tooltip-container');
    // this.renderer.appendChild(this.element, this.tooltipElement);
    // this.renderer.addClass(this.element, 'tooltip-container');
  }

}
