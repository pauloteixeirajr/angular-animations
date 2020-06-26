import { Component, OnInit, HostBinding } from '@angular/core';
import {
  routeFadeTrigger,
  routeSlideTrigger,
} from '../shared/route-animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [routeFadeTrigger, routeSlideTrigger],
})
export class UsersComponent implements OnInit {
  // @HostBinding('@routeFade') routeAnimation = true;
  @HostBinding('@routeSlide') routeAnimation = true;

  constructor() {}

  ngOnInit() {}
}
