import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  public x = 5;
  public myClass = 'green';
  public myColor = 'pink';
  public myParagraphColor = 'green';
  public user = {
    name: 'John'
  };

  constructor(private router: Router) {
    setTimeout(() => {
      this.myClass = 'pink';
      setTimeout(() => {
        this.myClass = 'mblue';
      }, 1000);
    }, 1000);
  }

  ngOnInit() {}

  changeColor(color) {
    this.myColor = color;
  }

  changeParagraphColor(color) {
    this.myParagraphColor = color;
  }

  goHome() {
    this.router.navigate(['']);
  }
}
