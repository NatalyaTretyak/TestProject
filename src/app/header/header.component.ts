import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public x = 5;
  public myClass = 'green';
  public user = {
    name: 'John'
  };

  constructor() {}

  ngOnInit() {}
}
