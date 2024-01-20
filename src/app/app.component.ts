import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
  // pick either styleUrl or styles - you can't do both.
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class AppComponent {
  title = 'Julie\'s app';
  // name = "Julie";
  // buttonCounter = [];
}
