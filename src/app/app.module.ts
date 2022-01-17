import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AccordionModule } from './accordion/accordion.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [AccordionModule, BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
