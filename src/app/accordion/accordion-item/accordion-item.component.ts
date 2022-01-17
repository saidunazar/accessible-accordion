import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  animations: [
    trigger('contentState', [
      state(
        'initial',
        style({
          height: '0',
          overflow: 'hidden',
          visibility: 'hidden',
          margin: '-10px 0px',
        })
      ),
      state(
        'final',
        style({
          overflow: 'hidden',
        })
      ),
      transition('initial<=>final', animate('250ms')),
    ]),

    trigger('titleState', [
      state(
        'initial',
        style({
          background: '#ffffff',
        })
      ),
      state(
        'final',
        style({
          background: '#a9a9a9',
        })
      ),
      transition('initial <=> final', animate('250ms')),
    ]),
  ],
})
export class AccordionItemComponent implements OnInit {
  @Input() faq: any = {};
  showContent = false;
  plusIcon = 'assets/svg/plus-icon.svg';
  closeIcon = 'assets/svg/close-icon.svg';

  constructor() {}

  ngOnInit(): void {}

  //Method to toggle accordion
  toggleAccordion() {
    this.showContent = !this.showContent;
  }
}
