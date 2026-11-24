import { Component, signal } from '@angular/core';
import { Screen } from './components/screen/screen';
import { Navbar } from './components/navbar/navbar/navbar';

@Component({
  imports: [ Screen, Navbar],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-22-demo');
}
