import {animate, state, style, transition, trigger} from '@angular/animations';

export const itemAnim = trigger('item', [
  state('in', style({'border-left': '3px'})),
  state('out', style({'border-left': '8px'})),
  transition('in => out', animate('100ms ease-in')),
  transition('out => in', animate('100ms ease-out'))
]);
