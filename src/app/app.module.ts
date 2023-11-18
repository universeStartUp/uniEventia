import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgIconComponent } from '@ng-icons/core';
import { EventCardComponent } from './components/event-card/event-card.component';
import { RegisterComponent } from './components/register/register.component';
// Import HttpClientModule
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventCardComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    [NgIconComponent]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
