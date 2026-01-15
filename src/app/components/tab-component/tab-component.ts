import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-component',
  imports: [],
  styleUrl: './tab-component.scss',
  template: `
    <div class="tab-component">
      <button class="yellow-state" [attr.aria-pressed]="selected === 'study-mode'" (click)="studyModeButtonClick()">Study Mode</button>
      <button class="white-state" (click)="allCardsButtonClick()" [attr.aria-pressed]="selected === 'all-cards'">All Cards</button>
    </div>
  `
})
export class TabComponent {

  selected : 'study-mode' | 'all-cards' = 'study-mode';

  protected studyModeButtonClick() {
    this.selected = 'study-mode';
  }

  protected allCardsButtonClick() {
    this.selected = 'all-cards';
  }
}
