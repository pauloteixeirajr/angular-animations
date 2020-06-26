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
