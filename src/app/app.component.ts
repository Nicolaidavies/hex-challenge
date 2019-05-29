import { Component } from '@angular/core';
import hex from 'string-hex';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hex-challenge';

  input: string[] = [];

  key = 'HELLO';

  keys = ['A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  correct: boolean = null;

  add(letter: string) {
    this.input.push(letter);
  }

  delete() {
    this.input.pop();
  }

  submit() {
    const hexValue = hex(this.key) as string;
    const stringValue = this.input.join('');
    this.correct =  hexValue.toLowerCase() === stringValue.toLowerCase();
  }

  reset() {
    this.correct = null;
    this.input = [];
  }

}
