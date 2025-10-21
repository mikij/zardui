import { ZardCardComponent } from '@zard/components/card/card.component';
import { Component } from '@angular/core';
import { Layers2Icon, LucideAngularModule, LucideIconData, SparklesIcon, UsersIcon, ZapIcon } from 'lucide-angular';

interface FeatureCard {
  title: string;
  description: string;
  icon: LucideIconData;
}

@Component({
  selector: 'why-zardui-section',
  standalone: true,
  imports: [LucideAngularModule, ZardCardComponent],
  template: `
    <section class="flex flex-col gap-8">
      <div class="flex flex-col gap-4">
        <h2 class="text-3xl font-bold tracking-tight">Why ZardUI?</h2>
        <p class="text-base leading-7 text-muted-foreground">Finally, a component library that doesn't force you to choose between beauty and functionality.</p>
      </div>

      <div class="grid gap-4 md:grid-cols-2">
        @for (card of cards; track $index) {
          <z-card [zTitle]="title">
            <ng-template #title>
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-lg">
                <i-lucide class="text-primary font-extralight size-4" [img]="card.icon" />
              </div>
            </ng-template>
            <h3 class="mt-4 text-lg font-semibold">{{ card.title }}</h3>
            <p class="mt-2 text-sm text-muted-foreground">{{ card.description }}</p>
          </z-card>
        }
      </div>
    </section>
  `,
})
export class WhyZardUISection {
  readonly cards: FeatureCard[] = [
    {
      title: 'Beautiful & Practical',
      description: 'Meticulously crafted components that look stunning out of the box while remaining highly functional and accessible.',
      icon: SparklesIcon,
    },
    {
      title: 'Community First',
      description: 'Built by Angular developers who understand your needs. Real-world solutions to real problems.',
      icon: UsersIcon,
    },
    {
      title: 'Modern Angular',
      description: 'Leveraging the latest Angular features including standalone components, signals, and best practices.',
      icon: ZapIcon,
    },
    {
      title: 'Infinitely Customizable',
      description: 'Built with TailwindCSS for seamless customization. Make every component truly yours.',
      icon: Layers2Icon,
    },
  ];
}
