import { Response } from 'express';
import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, Optional, PLATFORM_ID } from '@angular/core';

import { RESPONSE } from '../injection-tokens/ssr';

@Injectable({
  providedIn: 'root',
})
export class SDKApplicationManager {

  constructor(
    @Inject(DOCUMENT) public document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Optional() @Inject(RESPONSE) private response: Response,
  ) { }

  get isBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  get isServer() {
    return isPlatformServer(this.platformId);
  }

  setServerResponseStatus(status: number) {

    console.log(this.isServer);
    if (this.isServer) {
      this.response?.status(status);
    }
  }
}
