import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formapp';

  userModule = new User('Harry', 'harry@gmail.com',8899009900,'Bangalore','23/09/1996')
}
