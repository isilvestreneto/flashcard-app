import {Component, Input, signal, Signal, WritableSignal} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() textoBotao = 'Button';
  @Input() disabled = false;
  @Input() type: 'primary' | 'secondary' | 'border' = 'border';


}
