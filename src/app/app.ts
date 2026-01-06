import {Component, signal} from '@angular/core';
import {InputComponent} from './components/input/input';

@Component({
  selector: 'app-root',
  imports: [
    InputComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('flashcard-app');
  protected question = signal('Question');
  placeholder = signal('e.g., What is the capital of France?');
}
