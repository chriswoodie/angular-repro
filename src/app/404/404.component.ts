import { Component, OnInit } from '@angular/core';

import { SDKApplicationManager } from 'sdk';

@Component({
  standalone: true,
  selector: 'app-404',
  templateUrl: './404.component.html',
  styleUrl: './404.component.scss',
})
export class FourZeroFourComponent implements OnInit {
  
  constructor(
    private applicationManager: SDKApplicationManager,
  ) {
    this.applicationManager.setServerResponseStatus(404);
  }

  ngOnInit() {}
}