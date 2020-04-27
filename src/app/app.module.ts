import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponeComponent } from './compone/compone.component';
import { ComptwoComponent } from './comptwo/comptwo.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponeComponent,
    ComptwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
