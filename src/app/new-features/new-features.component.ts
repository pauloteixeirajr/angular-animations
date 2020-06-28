import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-new-features',
  templateUrl: './new-features.component.html',
  styleUrls: ['./new-features.component.css'],
  animations: [
    trigger('panelState', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(100%)',
        }),
        animate(200),
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
    ]),
  ],
})
export class NewFeaturesComponent {
  showPanel = false;
  showParagraph = true;
}
