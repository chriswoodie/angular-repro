import { CommonModule } from '@angular/common';
import { AfterContentChecked, ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LibButtonContentComponent } from '../button-content/button-content.component';

@Component({
  standalone: true,
  selector: 'lib-anchor',
  templateUrl: './anchor.component.html',
  styleUrl: './anchor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterModule,
    LibButtonContentComponent,
  ],
})
export class LibAnchorComponent {
  @Input({ required: true }) link?: string;

  protected get isExternal() {
    
    try {
      return !!this.link?.match(/^(http|https|mailto)/i);
    } catch (err) {
      return false;
    }
  }
}
