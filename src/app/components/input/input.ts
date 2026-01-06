import {Component, Input, signal} from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class InputComponent {
  @Input() textLabel = '';
  @Input() placeholder = '';
  @Input() error = signal(false);

}
