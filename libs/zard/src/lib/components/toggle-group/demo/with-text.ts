import { Component } from '@angular/core';
import { BoldIcon, ItalicIcon, LucideAngularModule, UnderlineIcon } from 'lucide-angular';

import { ZardToggleGroupComponent, ZardToggleGroupItem } from '../toggle-group.component';

@Component({
  selector: 'demo-toggle-group-with-text',
  standalone: true,
  imports: [LucideAngularModule, ZardToggleGroupComponent],
  template: ` <z-toggle-group zMode="multiple" [items]="items" [defaultValue]="['italic']" (valueChange)="onToggleChange($event)"></z-toggle-group> `,
})
export default class ToggleGroupWithTextComponent {
  items: ZardToggleGroupItem[] = [
    {
      value: 'bold',
      icon: BoldIcon,
      label: 'Bold',
      ariaLabel: 'Toggle bold',
    },
    {
      value: 'italic',
      icon: ItalicIcon,
      label: 'Italic',
      ariaLabel: 'Toggle italic',
    },
    {
      value: 'underline',
      icon: UnderlineIcon,
      label: 'Underline',
      ariaLabel: 'Toggle underline',
    },
  ];

  onToggleChange(value: string | string[]) {
    console.log('Selected formatting:', value);
  }
}
