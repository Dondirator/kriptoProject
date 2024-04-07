import { provideTransloco, TranslocoModule } from '@ngneat/transloco';
import { isDevMode, InjectionToken, NgModule } from '@angular/core';
import { TranslocoHttpLoader } from './transloco-loader';

// Создайте InjectionToken для TRANSLOCO_TRANSPILER
export const TRANSLOCO_TRANSPILER = new InjectionToken<string>(
  'TRANSLOCO_TRANSPILER'
);

@NgModule({
  exports: [TranslocoModule],
  providers: [
    // Предоставьте значение для TRANSLOCO_TRANSPILER
    { provide: TRANSLOCO_TRANSPILER, useValue: 'your-value' }, // Замените 'your-value' на соответствующее значение
    provideTransloco({
      config: {
        availableLangs: ['ru', 'en'],
        defaultLang: 'ru',
        fallbackLang: ['ru'],
        missingHandler: {
          useFallbackTranslation: true,
        },
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
  ],
})
export class TranslocoRootModule {}
