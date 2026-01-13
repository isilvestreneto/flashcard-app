import {Component, signal} from '@angular/core';
// import {InputComponent} from './components/input/input';
import {Textarea} from './components/textarea/textarea';
import {Button} from './components/button/button';
import {Checkbox} from './components/checkbox/checkbox';
import {DropdownItem} from './components/dropdown-item/dropdown-item';

@Component({
  selector: 'app-root',
  imports: [
    // InputComponent,
    // Textarea,
    // Button,
    // Checkbox,
    DropdownItem
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // Properties for Input component
  // protected readonly title = signal('flashcard-app');
  // protected question = signal('Question');
  // placeholder = signal('e.g., What is the capital of France?');

  // Properties for Textarea component
  // protected title = signal('Title');
  // protected placeholder = signal('Placeholder text');
  // error = signal(false);
}
