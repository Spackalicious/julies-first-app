import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrl: './user-name.component.css'
})
export class UserNameComponent implements OnInit {
    userName = '';
    creatingUserName = '';
    // allowNameClear = false;
    // ^^ his logic was much simpler!

    ngOnInit() { }

    // we aren't actually adding the user :)
    // onAddUserName() {
    //   this.creatingUserName = this.userName;
    // }

    // his button userName = '' is so much simpler, don't need this!
    // onClearUserName() {      
    //   if (this.userName.length > 0) {
    //     this.userName = '';
    //     // this.allowNameClear = false;
    //   }      
    // }

    onUpdateUserName(event: Event) {
      this.userName = (<HTMLInputElement>event.target).value;
      // this.allowNameClear = true;
    }
}
