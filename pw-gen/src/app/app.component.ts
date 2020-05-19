import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  password = '';
  length = 0;
  checkSymbols = false;
  checkLetters = false;
  checkNumbers = false;
  generatedPassword = '';


  onChangeLength(value: string) {
    const ParsedValue = parseInt(value);

    if(!isNaN(ParsedValue)) {
      this.length = ParsedValue;
    }
  }




  onButtonPressed() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '~!@#$%^&*()_{}":?><';

    let validChars = '';
    if(this.checkLetters) {
      validChars += letters;
    }
    if(this.checkNumbers) {
      validChars += numbers;
    }
    if(this.checkSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for(let i=0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;


  }


  onSymbolsPressed() {
    this.checkSymbols = !this.checkSymbols;
  }
  onLettersPressed() {
    this.checkLetters = !this.checkLetters;
  }
  onNumbersPressed() {
    this.checkNumbers = !this.checkNumbers;
  }

}
