import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-card',
  templateUrl: './auth-card.component.html',
  styleUrls: ['./auth-card.component.css']
})
export class AuthCardComponent implements OnInit {
  @Input() cardTitle: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
