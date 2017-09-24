import { Component } from '@angular/core';
import {IUser} from './components/avatar/avatar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public title = 'app';
  public user: IUser;
  public user2: IUser;
  public user3: IUser;

  constructor () {
    this.user = {
        firstName: 'john',
        lastName: 'doe'
    };
  }
}
