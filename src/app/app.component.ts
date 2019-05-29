import { Component, OnInit } from '@angular/core';
import hex from 'string-hex';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hex-challenge';

  input: string[] = [];

  key: string;
  keys = ['A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  correct: boolean = null;

  ngOnInit() {
    this.key = this.randomString();
  }

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
    this.key = this.randomString();
  }


  hint() {
    alert('Starts at 41');
  }


  randomString() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    for (let i = 0; i < 4; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }


}
