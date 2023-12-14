import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// IMPORTANT: This component mainly exist to solve the issue with having multiple ng-content with the same "name" (or lack thereof) in the lib-button component
@Component({
  standalone: true,
  selector: 'lib-button-content',
  templateUrl: './button-content.component.html',
  styleUrl: './button-content.component.scss',
  imports: [
    CommonModule,
  ],
})
export class LibButtonContentComponent {}
