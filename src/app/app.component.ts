import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myData: any;

  public mask = [
    '(',
    /[1-9]/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ';',
  ];
  change(value: string, el: any): any {
    var char = value.charAt(value.length - 1);
    console.log(value.charAt(value.length - 1));
    if (char == ';' && value.indexOf('_') == -1) {
      this.addMask();
    }
  }
  addMask(): any {
    this.mask.push(
      '(',
      /[1-9]/,
      /\d/,
      /\d/,
      ')',
      ' ',
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      ';'
    );
  }
}
