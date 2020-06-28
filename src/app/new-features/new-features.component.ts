import { Component } from '@angular/core';
import {
  animate,
  style,
  transition,
  trigger,
  query,
  group,
} from '@angular/animations';

@Component({
  selector: 'app-new-features',
  templateUrl: './new-features.component.html',
  styleUrls: ['./new-features.component.css'],
  animations: [
    trigger('panelState', [
      transition(':enter', [
        group([
          // :self selects the element attached to the animation
          query(':self', [
            style({
              opacity: 0,
            }),
            animate(500),
          ]),
          query('.card-header', [
            style({
              transform: 'translateY(-300px)',
              opacity: 0,
            }),
            animate(300),
          ]),
          query('.card-body', [
            style({
              transform: 'translateX(-300px)',
              opacity: 0,
            }),
            animate(300),
          ]),
          query('.card-footer', [
            style({
              transform: 'translateY(300px)',
              opacity: 0,
            }),
            animate(300),
          ]),
        ]),
      ]),
      transition(':leave', [
        animate(
          200,
          style({
            transform: 'translateX(-100%)',
            opacity: 0,
          })
        ),
      ]),
      transition('* => *', [
        query(
          ':enter',
          [
            style({
              transform: 'scale(1)',
            }),
            animate(
              200,
              style({
                transform: 'scale(1.1)',
              })
            ),
            animate(100),
          ],
          {
            optional: true,
          }
        ),
      ]),
    ]),
  ],
})
export class NewFeaturesComponent {
  showPanel = false;
  showParagraph = true;
}
