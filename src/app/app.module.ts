import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { CardmainComponent } from './components/cardmain/cardmain.component';
import { TextComponent } from './components/text/text.component';
import { InputButtonComponent } from './components/input-button/input-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardmainComponent,
    TextComponent,
    InputButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
