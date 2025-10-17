import { Component } from '@angular/core';
import { LucideAngularModule, TextAlignCenterIcon, TextAlignEndIcon, TextAlignStartIcon } from 'lucide-angular';

import { ZardToggleGroupComponent, ZardToggleGroupItem } from '../toggle-group.component';

@Component({
  selector: 'demo-toggle-group-single',
  standalone: true,
  imports: [LucideAngularModule, ZardToggleGroupComponent],
  template: ` <z-toggle-group zMode="single" [items]="items" defaultValue="center" (valueChange)="onToggleChange($event)"></z-toggle-group> `,
})
export default class ToggleGroupSingleComponent {
  items: ZardToggleGroupItem[] = [
    {
      value: 'left',
      icon: TextAlignStartIcon,
      ariaLabel: 'Align left',
    },
    {
      value: 'center',
      icon: TextAlignCenterIcon,
      ariaLabel: 'Align center',
    },
    {
      value: 'right',
      icon: TextAlignEndIcon,
      ariaLabel: 'Align right',
    },
  ];

  onToggleChange(value: string | string[]) {
    console.log('Selected alignment:', value);
  }
}
