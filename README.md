# Introduction

**@thachnuida/ngx-barcode** is an Angular Barcode Component based on **JsBarcode**.

# Demo

[Barcode Generator](http://thachnuida.github.io/ngx-barcode)

# Installation

```
$ npm install @thachnuida/ngx-barcode --save
```

# Usage

Import the `NgxBarcodeModule` into your desired module:

```
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { NgxBarcodeModule } from '@thachnuida/ngx-barcode';

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
```

Add `ngx-barcode` to your component:

```
<ngx-barcode text="Hello"></ngx-barcode>
```

# Barcode Options

Please check doucument in [JsBarcode document](https://github.com/lindell/JsBarcode/wiki/Options).


# License

`ngx-barcode` is shared under the MIT license.
