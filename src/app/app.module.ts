import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgIconComponent } from '@ng-icons/core';
import { EventCardComponent } from './components/event-card/event-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventCardComponent,
  ],
  imports: [
    BrowserModule,
    [NgIconComponent]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
