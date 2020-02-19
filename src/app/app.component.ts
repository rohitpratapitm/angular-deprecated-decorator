import { Component } from '@angular/core';
import { Deprecated } from './decorators';

@Component({
  selector: 'my-app, my-app-new',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
@Deprecated("my-app")
export class AppComponent  {
  name = 'Angular';
}
