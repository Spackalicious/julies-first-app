import { Component } from '@angular/core';
// import { timestamp } from 'rxjs';

@Component({
    selector: 'app-display-details',
    templateUrl: './display-details.component.html',
    styleUrl: './display-details.component.css'
})
export class DisplayDetailsComponent {
  showSecret = false;
  log = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    // the above works great. Trying something new with using the Index when using ngFor.
    // Just using a timestamp will make EVERYTHING blue because the value is greater than 5!
    this.log.push(new Date());
  }
}


// This was Julie's first attempt! 
// I had also tried using a separate component called display-button, similar to servers and server components. What a mess. 
// @Component({
//   selector: 'app-display-details',
//   templateUrl: './display-details.component.html',
//   styleUrl: './display-details.component.css'
// })
// export class DisplayDetailsComponent {
//   buttonCounter = [];  
//   // buttonCounter = <app-display-button>;  
//   showTuna = false;  
//   constructor() {
//   }
//   onToggleDisplay() {    
//     this.buttonCounter.push(Date.now());
//     // buttonCounterLength 
//     console.log('the button works and the time is ' + Date.now() + 'and the array length is ' +  this.buttonCounter.length);
//     if (this.buttonCounter.length % 2 != 0) {
//       this.showTuna = true;
//       console.log('the paragraph should display');
//     } else {
//       this.showTuna = false;
//     }
//     return this.buttonCounter.length;
//   } 
// }
