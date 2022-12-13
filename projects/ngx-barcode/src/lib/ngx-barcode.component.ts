import { Component, ElementRef, OnInit, Input, OnChanges, Renderer2 } from '@angular/core';
import jsbarcode from 'jsbarcode';

@Component({
  selector: 'ngx-barcode',
  template: `
  `,
  styles: [
  ],
})
export class NgxBarcodeComponent implements OnChanges, OnInit {

  /**
   * Barcode element type. Default is svg
   */
  @Input() elementType: 'svg' | 'canvas' | 'img' = 'svg';

  /**
   * Barcode text value
   */
  @Input() text = '';

  /**
   * Barcode class name
   */
  @Input() className = '';

  /**
   * JsBarCode options
   * https://github.com/lindell/JsBarcode/wiki/Options
   */
  @Input() options!: any;

  constructor(
    private _element: ElementRef,
    private render: Renderer2
  ) { }

  ngOnInit(): void {
    this.renderBarcode();
  }

  ngOnChanges(): void {
    this.renderBarcode();
  }

  renderBarcode() {
    this._element.nativeElement.innerHTML = '';
    const barcodeElm = this.render.createElement(this.elementType, this.elementType === 'svg' ? 'svg' : '');
    if (this.className) {
      this.render.setAttribute(barcodeElm, 'class', this.className);
    }
    if (this._element.nativeElement.firstChild) {
      this.render.removeChild(this._element.nativeElement, this._element.nativeElement.firstChild, true);
    }
    this.render.appendChild(this._element.nativeElement, barcodeElm);
    jsbarcode(barcodeElm, this.text, this.options);

  }

}
