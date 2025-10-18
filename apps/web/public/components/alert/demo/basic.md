```angular-ts showLineNumbers copyButton
import { Component } from '@angular/core';
import { CodeXmlIcon } from 'lucide-angular';

import { ZardAlertComponent } from '../alert.component';

@Component({
  standalone: true,
  imports: [ZardAlertComponent],
  template: ` <z-alert [zIcon]="icon" [zTitle]="title" [zDescription]="description" /> `,
})
export class ZardDemoAlertBasicComponent {
  icon = CodeXmlIcon;
  title = 'Hello World!';
  description = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, sint.';
}

```