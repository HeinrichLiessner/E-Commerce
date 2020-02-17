import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-something-else',
  templateUrl: './something-else.component.html',
  styleUrls: ['./something-else.component.css']
})
export class SomethingElseComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  showFiller = false;
}
