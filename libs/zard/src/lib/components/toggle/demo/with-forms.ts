import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { LightbulbIcon, LightbulbOffIcon, LucideAngularModule } from 'lucide-angular';

import { ZardToggleComponent } from '../toggle.component';

@Component({
  standalone: true,
  imports: [LucideAngularModule, ZardToggleComponent, FormsModule],
  template: `
    @let icon = lightOn ? LightbulbIcon : LightbulbOffIcon;
    <z-toggle aria-label="Turn on the light" [(ngModel)]="lightOn">
      <i-lucide [img]="icon" class="size-4" />
    </z-toggle>
  `,
})
export class ZardDemoToggleWithFormComponent {
  protected readonly LightbulbIcon = LightbulbIcon;
  protected readonly LightbulbOffIcon = LightbulbOffIcon;
  protected lightOn = false;
}
