import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  trigger,
  transition,
  query,
  style,
  animate,
  group,
} from '@angular/animations';

const optional = { optional: true };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeState', [
      transition('* => *', [
        group([
          query(
            ':enter',
            [
              style({
                transform: 'translateY(-400px)',
                opacity: 0,
              }),
              animate('300ms ease-out'),
            ],
            optional
          ),
          query(
            ':leave',
            [
              animate(
                '300ms ease-out',
                style({
                  transform: 'translateY(600px)',
                  opacity: 0,
                })
              ),
            ],
            optional
          ),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  getAnimationData(outlet: RouterOutlet) {
    const animation = outlet.activatedRouteData.animation;

    if (!animation) return 'routePage';

    return animation.page;
  }
}
