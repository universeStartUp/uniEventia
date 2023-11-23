import { NgModule } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { heroCalendar } from '@ng-icons/heroicons/outline';
import { heroBars3 } from '@ng-icons/heroicons/outline';
import { bootstrapFacebook } from '@ng-icons/bootstrap-icons';
import { bootstrapInstagram } from '@ng-icons/bootstrap-icons';
import { bootstrapTwitter } from '@ng-icons/bootstrap-icons';

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
      bootstrapFacebook: bootstrapFacebook,
      bootstrapInstagram: bootstrapInstagram,
      bootstrapTwitter: bootstrapTwitter,
    }),
  ],
})
export class IconsModule {}
