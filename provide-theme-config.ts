import { EnvironmentProviders, InjectionToken, makeEnvironmentProviders, provideAppInitializer } from '@angular/core';

/**
 * Theme configuration type.
 */
type ThemeConfig = {
  themeColor: string;
  typography: string;
};

/**
 * Injection token to provide the theme configuration for your application.
 */
export const THEME_CONFIG = new InjectionToken<ThemeConfig>('THEME_CONFIG');

/**
 * Function to provide the theme configuration to the application.
 */
export function provideThemeConfig(config: ThemeConfig): EnvironmentProviders {
  const initializer = provideAppInitializer(() => {
    document.documentElement.style.setProperty('--theme-color', config.themeColor);
    document.documentElement.style.setProperty('--typography', config.typography);
  });

  return makeEnvironmentProviders([
    {
      provide: THEME_CONFIG,
      useValue: config,
    },
    initializer,
  ]);
}