import { state, trigger, transition, style, animate, query } from '@angular/animations';

export const fadeLogo = trigger('fadeLogo', [
  transition('* => *', [
    style({ opacity: 0 }),
    animate('1500ms ease-out', style({ opacity: 1 }))
  ])
]);