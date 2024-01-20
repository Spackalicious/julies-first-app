import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styles: [`
    p {
      color: green;
      background-color: palegreen;
      font-weight: bold;
      padding: 20px;
      border: 1px solid green;
    }
  `]
})
export class SuccessAlertComponent {

}
