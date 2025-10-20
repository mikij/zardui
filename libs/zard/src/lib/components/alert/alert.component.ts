import { ChangeDetectionStrategy, Component, computed, input, ViewEncapsulation } from '@angular/core';
import type { ClassValue } from 'clsx';
import { CircleCheckIcon, CircleXIcon, InfoIcon, LucideAngularModule, LucideIconData, TriangleAlertIcon } from 'lucide-angular';

import { mergeClasses } from '../../shared/utils/utils';
import { alertVariants, ZardAlertVariants } from './alert.variants';

@Component({
  selector: 'z-alert',
  standalone: true,
  exportAs: 'zAlert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [LucideAngularModule],
  template: `
    @if (iconName()) {
      <i-lucide [name]="zIcon()" [img]="iconName()" class="size-4" />
    }

    <div class="flex flex-col gap-1 w-full">
      <h5 class="font-medium leading-none tracking-tight">{{ zTitle() }}</h5>
      <span class="text-sm leading-[1.625]">{{ zDescription() }}</span>
    </div>
  `,
  host: {
    '[class]': 'classes()',
    '[attr.data-type]': 'zType()',
    '[attr.data-appearance]': 'zAppearance()',
  },
})
export class ZardAlertComponent {
  readonly class = input<ClassValue>('');
  readonly zTitle = input.required<string>();
  readonly zDescription = input.required<string>();
  readonly zIcon = input<LucideIconData | undefined>();
  readonly zType = input<ZardAlertVariants['zType']>('default');
  readonly zAppearance = input<ZardAlertVariants['zAppearance']>('outline');

  protected readonly classes = computed(() => mergeClasses(alertVariants({ zType: this.zType(), zAppearance: this.zAppearance() }), this.class()));

  protected readonly iconsType: Record<NonNullable<ZardAlertVariants['zType']>, LucideIconData | undefined> = {
    default: undefined,
    info: InfoIcon,
    success: CircleCheckIcon,
    warning: TriangleAlertIcon,
    error: CircleXIcon,
  };

  protected readonly iconName = computed(() => {
    return this.zIcon() ?? this.iconsType[this.zType() ?? 'default'];
  });
}
