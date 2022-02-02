import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { cardAppear } from 'src/app/shared/animations/card-appear';

@Component({
  selector: 'app-auth-card',
  templateUrl: './auth-card.component.html',
  styleUrls: ['./auth-card.component.css'], 
  animations: [
    trigger(
      'card-appear', 
      [
        transition(
          ':enter', 
          [
            useAnimation(cardAppear, {
              params: {
                startOpacity: 0, 
                time: '1s ease-out', 
                startTransform: 'translateY(30px)', 
                endOpacity: 1, 
                endTransform: 'translateY(0px)'
              }
            })
          ]
        )
      ]
    )
  ]
})
export class AuthCardComponent implements OnInit {
  @Input() cardTitle: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
