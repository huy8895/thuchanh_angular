import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled1';
  text = 'hello';
  textSize = 14;
  status = true;

  changeSize(): void {
    this.textSize++;
  }

  changeStatus(): void {
    this.status = !this.status;
  }
}
