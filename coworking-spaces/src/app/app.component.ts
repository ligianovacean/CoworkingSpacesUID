import {Component, HostListener, OnInit} from '@angular/core';
import {ADMIN_NAVBAR, REGULAR_USER_NAVBAR, SITE_VISITOR_NAVBAR} from '../navbarData';
import {Globals} from './model/globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private globals: Globals) { }

  ngOnInit() {
    this.globals.menuItems = SITE_VISITOR_NAVBAR;
  }
}
