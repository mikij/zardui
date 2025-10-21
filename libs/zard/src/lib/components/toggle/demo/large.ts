import { Component } from '@angular/core';
import { BoldIcon, LucideAngularModule } from 'lucide-angular';

import { ZardToggleComponent } from '../toggle.component';

@Component({
  standalone: true,
  imports: [LucideAngularModule, ZardToggleComponent],
  template: `
    <z-toggle aria-label="Toggle large" zSize="lg">
      <i-lucide [img]="BoldIcon" class="size-4" />
    </z-toggle>
  `,
})
export class ZardDemoToggleLargeComponent {
  protected readonly BoldIcon = BoldIcon;
}
