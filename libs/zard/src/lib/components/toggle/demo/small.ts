import { Component } from '@angular/core';
import { BoldIcon, LucideAngularModule } from 'lucide-angular';

import { ZardToggleComponent } from '../toggle.component';

@Component({
  standalone: true,
  imports: [LucideAngularModule, ZardToggleComponent],
  template: `
    <z-toggle aria-label="Toggle small" zSize="sm">
      <i-lucide [img]="BoldIcon" class="size-3" />
    </z-toggle>
  `,
})
export class ZardDemoToggleSmallComponent {
  protected readonly BoldIcon = BoldIcon;
}
