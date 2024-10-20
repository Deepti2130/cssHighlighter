import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CssHighlighterDirective } from './shared/directives/css-highlighter.directive';
import { LowercaseDirective } from './shared/directives/lowercase.directive';

@NgModule({
  declarations: [
    AppComponent,
    CssHighlighterDirective,
    LowercaseDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
