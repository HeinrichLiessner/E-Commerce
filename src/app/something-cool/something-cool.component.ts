import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-something-cool',
  templateUrl: './something-cool.component.html',
  styleUrls: ['./something-cool.component.css']
})

export class SomethingCoolComponent implements OnInit {

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
