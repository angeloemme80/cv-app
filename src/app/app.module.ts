import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitoloCvComponent } from './titolo-cv/titolo-cv.component';
import { BoxEsperienzeComponent } from './box-esperienze/box-esperienze.component';
import { EsperienzeService } from './box-esperienze/esperienze.service';
import { IstruzioneFormazioneComponent } from './istruzione-formazione/istruzione-formazione.component';

@NgModule({
  declarations: [
    AppComponent,
    TitoloCvComponent,
    BoxEsperienzeComponent,
    IstruzioneFormazioneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EsperienzeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
