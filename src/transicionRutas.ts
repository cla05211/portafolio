import { trigger, transition, style, animate, query, group } from '@angular/animations';


export const transicionRutas = trigger('transicionRutas', [
  transition('* => *', [
    style({ position: 'relative', overflow: 'hidden' }),


    query(':enter', [
      style({ 
        position: 'absolute',
        top: '6vh',
        left: 0,
        width: '100%',
        height: '96%',
        transform: 'translateY(100%)',
        opacity: 1
      })
    ], { optional: true }),

    group([
      // El que sale
      query(':leave', [
        style({ 
          position: 'absolute',
          top: '6vh',
          left: 0,
          width: '100%',
          height: '96%',
          transform: 'translateY(0)',
          opacity: 1
        }),
        animate('0.4s ease-out', style({ 
          transform: 'translateY(-100%)'
        }))
      ], { optional: true }),

      // El que entra
      query(':enter', [
        animate('0.4s ease-out', style({ 
          transform: 'translateY(0)'
        }))
      ], { optional: true })
    ])
  ])
]);