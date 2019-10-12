import { Injectable } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt-BR');

// Fonte -> https://github.com/angular/angular/issues/20197

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor() { }

  getLocale() {
    return 'pt-BR';
  }
}
