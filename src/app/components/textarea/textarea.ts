import {Component, Input, signal} from '@angular/core';

@Component({
  selector: 'app-textarea',
  imports: [],
  templateUrl: './textarea.html',
  styleUrl: './textarea.scss',
})
export class Textarea {
  @Input() title = signal<string>('Title');
  @Input() error = signal<boolean>(false);
  @Input() placeholder = signal<string>('Placeholder text');

}
