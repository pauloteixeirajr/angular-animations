import { trigger, transition, style, animate } from '@angular/animations';

export const routeFadeTrigger = trigger('routeFade', [
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate(300),
  ]),
  transition(
    ':leave',
    animate(
      300,
      style({
        opacity: 0,
      })
    )
  ),
]);

export const routeSlideTrigger = trigger('routeSlide', [
  transition(':enter', [
    style({
      transform: 'translateY(-100%)',
      opacity: 0,
    }),
    animate(1000),
  ]),
  transition(
    ':leave',
    animate(
      1000,
      style({
        transform: 'translateY(100%)',
        opacity: 0,
      })
    )
  ),
]);
