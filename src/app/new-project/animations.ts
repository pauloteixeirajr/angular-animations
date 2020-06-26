import {
  trigger,
  state,
  style,
  transition,
  group,
  animate,
} from '@angular/animations';

export const buttonTrigger = trigger('validation', [
  state(
    'valid',
    style({
      backgroundColor: 'green',
      borderColor: 'darkgreen',
    })
  ),
  state(
    'invalid',
    style({
      backgroundColor: 'red',
      borderColor: 'darkred',
    })
  ),
  transition('invalid => valid', [
    group([
      animate(
        100,
        style({
          transform: 'scale(1.1)',
        })
      ),
      animate(
        200,
        style({
          backgroundColor: 'green',
        })
      ),
    ]),
    animate(
      200,
      style({
        transform: 'scale(1)',
      })
    ),
  ]),
  transition('valid => invalid', [
    group([
      animate(
        100,
        style({
          transform: 'scale(1.1)',
        })
      ),
      animate(
        200,
        style({
          backgroundColor: 'red',
        })
      ),
    ]),
    animate(
      200,
      style({
        transform: 'scale(1)',
      })
    ),
  ]),
]);
