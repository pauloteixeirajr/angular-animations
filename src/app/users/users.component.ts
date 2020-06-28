import { Component, OnInit, HostBinding } from '@angular/core';
import {
  routeFadeTrigger,
  routeSlideTrigger,
} from '../shared/route-animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [
    routeFadeTrigger({ startOpacity: 0, duration: '500ms' }),
    routeSlideTrigger,
  ],
})
export class UsersComponent implements OnInit {
  // @HostBinding('@routeFade') routeAnimation = true;
  @HostBinding('@routeSlide') routeAnimation = true;

  constructor() {}

  ngOnInit() {}
}
