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
    animate('300ms ease-out'),
  ]),
  transition('marked => default', [
    style({ border: '1px solid darkblue', padding: '20px' }),
    animate('300ms ease-out'),
  ]),
]);
