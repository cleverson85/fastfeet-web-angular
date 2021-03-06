import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  @Input() route: string;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void { }

  edit(): void {
    this.router.navigate([this.route]);
  }

  delete(): void {
    this.activatedRoute.params.subscribe(async params => {
      const { id } = params;

      console.log(id);
    });
  }
}
