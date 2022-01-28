import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-input',
  templateUrl: './auth-input.component.html',
  styleUrls: ['./auth-input.component.css']
})
export class AuthInputComponent implements OnInit {
  @Input() label: string = '';
  @Input() type: string = '';

  selected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}
