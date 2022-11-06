import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'javaScript-project';
  initModel: number = 0;

  plusOrMinusClick(msg: string) {
    let model = this.initModel;
    let currentView = model;
    let message = msg;
    function dispatch(msg:string) {
      model = update(msg, model);
      const updatedView = model;
      currentView = updatedView;
    }
    dispatch(message)
    this.initModel=currentView;
  }
}

function update(msg: any, model: number) {
  switch (msg) {
    case 'plus':
      return model + 1;
    case 'minus':
      return model - 1;
    default:
      return model;
  }
}
