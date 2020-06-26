import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const markedTrigger = trigger('marked', [
  state(
    'default',
    style({
      border: '1px solid black',
      backgroundColor: 'transparent',
      padding: '20px',
    })
  ),
  state(
    'marked',
    style({
      border: '2px solid darkblue',
      backgroundColor: '#caeff9',
      padding: '19px',
    })
  ),
  transition('default => marked', [
    style({ border: '2px solid black', padding: '19px' }),
    animate(
      '200ms ease-out',
      style({
        transform: 'scale(1.05)',
      })
    ),
    animate(200),
  ]),
  transition('marked => default', [
    style({ border: '1px solid darkblue', padding: '20px' }),
    animate('300ms ease-out'),
  ]),
]);

export const itemTrigger = trigger('item', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)', opacity: 0 }),
    animate(
      '500ms ease-out',
      style({
        opacity: 1,
        transform: 'translateX(0)',
      })
    ),
  ]),
  transition(':leave', [
    animate(
      '500ms ease-in',
      style({
        opacity: 0,
        transform: 'translateX(100%)',
      })
    ),
  ]),
]);
