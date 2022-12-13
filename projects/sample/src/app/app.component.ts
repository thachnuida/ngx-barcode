import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text = 'ngx-jsbarcode';
  options: any = {
    width: 2,
    height: 120,
    margin: 10,
    displayValue: true,
    background: '#ffffff',
    lineColor: '#000000',
    font: 'monospace',
    fontSize: 20,
    textAlign: 'center',
    textMargin: 2
  };

  updateOptions() {
    this.options = {...this.options};
  }
}
