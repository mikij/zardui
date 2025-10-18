import { Component } from '@angular/core';
import { HouseIcon, LucideAngularModule, PuzzleIcon, SquareLibraryIcon } from 'lucide-angular';

import { ZardBreadcrumbModule } from '../breadcrumb.module';

@Component({
  standalone: true,
  imports: [LucideAngularModule, ZardBreadcrumbModule],
  template: `
    <z-breadcrumb>
      <z-breadcrumb-list zWrap="wrap" zAlign="start">
        <z-breadcrumb-item>
          <z-breadcrumb-link zLink="/">
            <i-lucide [img]="HouseIcon" class="w-4 h-4" />
            Home
          </z-breadcrumb-link>
        </z-breadcrumb-item>
        <z-breadcrumb-separator />
        <z-breadcrumb-item>
          <z-breadcrumb-link zLink="/components">
            <i-lucide [img]="PuzzleIcon" class="w-4 h-4" />
            Components
          </z-breadcrumb-link>
        </z-breadcrumb-item>
        <z-breadcrumb-separator />
        <z-breadcrumb-item>
          <z-breadcrumb-page>
            <i-lucide [img]="SquareLibraryIcon" class="w-4 h-4" />
            Breadcrumb
          </z-breadcrumb-page>
        </z-breadcrumb-item>
      </z-breadcrumb-list>
    </z-breadcrumb>
  `,
})
export class ZardDemoBreadcrumbWithAnIconComponent {
  protected readonly HouseIcon = HouseIcon;
  protected readonly PuzzleIcon = PuzzleIcon;
  protected readonly SquareLibraryIcon = SquareLibraryIcon;
}
