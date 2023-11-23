import { NgModule } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { heroCalendar } from '@ng-icons/heroicons/outline';
import { heroBars3 } from '@ng-icons/heroicons/outline';

import { heroCalendarSolid } from '@ng-icons/heroicons/solid';
@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
    provideIcons({
      heroCalendar: heroCalendar,
      heroBars3: heroBars3,
      heroCalendarSolid: heroCalendarSolid,
    }),
  ],
})
export class IconsModule {}
