import { Component } from '@angular/core';

type TabKey = 'study-mode' | 'all-cards';

@Component({
  selector: 'app-tab-component',
  imports: [],
  styleUrl: './tab-component.scss',
  template: `
    <div class="tab-component" role="group" aria-label="Card mode">
      <button
        type="button"
        class="tab-button"
        [attr.aria-pressed]="selected === 'study-mode'"
        (click)="select('study-mode')"
      >
        Study Mode
      </button>

      <button
        type="button"
        class="tab-button"
        [attr.aria-pressed]="selected === 'all-cards'"
        (click)="select('all-cards')"
      >
        All Cards
      </button>
    </div>
  `
})
export class TabComponent {

  selected: TabKey = 'study-mode';

  protected select(tab: TabKey) {
    this.selected = tab;
  }
}
