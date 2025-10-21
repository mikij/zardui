```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';
import { ItalicIcon, LucideAngularModule } from 'lucide-angular';

import { ZardToggleComponent } from '../toggle.component';

@Component({
  standalone: true,
  imports: [LucideAngularModule, ZardToggleComponent],
  template: `
    <z-toggle>
      <i-lucide [img]="ItalicIcon" class="size-4" />
      Italic
    </z-toggle>
  `,
})
export class ZardDemoToggleWithTextComponent {
  protected readonly ItalicIcon = ItalicIcon;
}

```