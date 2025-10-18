import { Component } from '@angular/core';
import { LucideAngularModule, MoveRightIcon } from 'lucide-angular';

import { ZardBreadcrumbModule } from '../breadcrumb.module';

@Component({
  standalone: true,
  imports: [LucideAngularModule, ZardBreadcrumbModule],
  template: `
    <z-breadcrumb>
      <z-breadcrumb-list>
        <z-breadcrumb-item>
          <z-breadcrumb-link zLink="/">Home</z-breadcrumb-link>
        </z-breadcrumb-item>
        <z-breadcrumb-separator>
          <i-lucide [img]="MoveRightIcon" class="w-4 h-4" />
        </z-breadcrumb-separator>
        <z-breadcrumb-item>
          <z-breadcrumb-link zLink="/components">Components</z-breadcrumb-link>
        </z-breadcrumb-item>
        <z-breadcrumb-separator>
          <i-lucide [img]="MoveRightIcon" class="w-4 h-4" />
        </z-breadcrumb-separator>
        <z-breadcrumb-item>
          <z-breadcrumb-page>Breadcrumb</z-breadcrumb-page>
        </z-breadcrumb-item>
      </z-breadcrumb-list>
    </z-breadcrumb>
  `,
})
export class ZardDemoBreadcrumbCustomSeparatorComponent {
  protected readonly MoveRightIcon = MoveRightIcon;
}
