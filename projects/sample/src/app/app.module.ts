import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxBarcodeModule } from 'projects/ngx-barcode/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxBarcodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
