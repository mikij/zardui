import { Component } from '@angular/core';
import { BoldIcon, LucideAngularModule } from 'lucide-angular';

import { ZardToggleComponent } from '../toggle.component';

@Component({
  standalone: true,
  imports: [LucideAngularModule, ZardToggleComponent],
  template: `
    <z-toggle aria-label="Toggle outline" zType="outline">
      <i-lucide [img]="BoldIcon" class="size-4" />
    </z-toggle>
  `,
})
export class ZardDemoToggleOutlineComponent {
  protected readonly BoldIcon = BoldIcon;
}
