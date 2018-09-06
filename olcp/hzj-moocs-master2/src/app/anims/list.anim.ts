import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

export const listAnimation = trigger('listAnim', [
  transition('* => *', [
    query(':enter', style({opacity: 0}), {optional: true}),
    query(':enter', stagger(100, [
      animate('1s', style({opacity: 1}))
    ]), {optional: true}),
    query(':leave', style({opacity: 1}), {optional: true}),
    query(':leave', stagger(100, [
      animate('1s ease-in', style({opacity: 0}))
    ]), {optional: true}),
  ])
])
