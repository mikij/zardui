import { Component } from '@angular/core';

import { ZardLoaderComponent } from '../loader.component';

@Component({
  selector: 'zard-demo-loader-default',
  standalone: true,
  imports: [ZardLoaderComponent],
  template: `<z-loader />`,
})
export class ZardDemoLoaderDefaultComponent {}
