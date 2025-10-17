import { Component } from '@angular/core';
import { BoldIcon, ItalicIcon, LucideAngularModule, UnderlineIcon } from 'lucide-angular';

import { ZardToggleGroupComponent, ZardToggleGroupItem } from '../toggle-group.component';

@Component({
  selector: 'demo-toggle-group-default',
  standalone: true,
  imports: [LucideAngularModule, ZardToggleGroupComponent],
  template: ` <z-toggle-group zMode="multiple" [items]="items" [defaultValue]="['italic']" (valueChange)="onToggleChange($event)"></z-toggle-group> `,
})
export default class ToggleGroupDefaultComponent {
  items: ZardToggleGroupItem[] = [
    {
      value: 'bold',
      icon: BoldIcon,
      ariaLabel: 'Toggle bold',
    },
    {
      value: 'italic',
      icon: ItalicIcon,
      ariaLabel: 'Toggle italic',
    },
    {
      value: 'underline',
      icon: UnderlineIcon,
      ariaLabel: 'Toggle underline',
    },
  ];

  onToggleChange(value: string | string[]) {
    console.log('Toggle group changed:', value);
  }
}
