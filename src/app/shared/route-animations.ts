import {
  trigger,
  transition,
  style,
  animate,
  animation,
  useAnimation,
} from '@angular/animations';

const fadeAnimation = animation(
  [
    style({
      opacity: '{{ startOpacity }}',
    }),
    animate('{{ duration }}'),
  ],
  {
    params: { startOpacity: 0, duration: '100ms' },
  }
);

export const routeFadeTrigger = params =>
  trigger('routeFade', [
    transition(':enter', [useAnimation(fadeAnimation, { params })]),
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
