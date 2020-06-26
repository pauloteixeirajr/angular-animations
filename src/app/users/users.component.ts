import { Component, OnInit, HostBinding } from '@angular/core';
import { routeFadeTrigger } from '../shared/route-animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [routeFadeTrigger],
})
export class UsersComponent implements OnInit {
  @HostBinding('@routeFade') routeAnimation = true;

  constructor() {}

  ngOnInit() {}
}
