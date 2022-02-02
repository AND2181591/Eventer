import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { textAppear } from '../animations/text-appear';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'], 
  animations: [
    trigger(
      'text-appear', 
      [
        transition(
          ':enter', 
          [
            useAnimation(textAppear, {
              params: {
                startOpacity: 0, 
                time: '1s ease-out', 
                endOpacity: 1
              }
            })
          ]
        )
      ]
    )
  ]
})
export class HeaderComponent implements OnInit {
  @Input() header: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
