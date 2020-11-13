import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  @Input() route: string;

  menuOpen: boolean;

  constructor() { }

  ngOnInit(): void {
  }
}
