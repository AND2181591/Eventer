import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-link',
  templateUrl: './auth-link.component.html',
  styleUrls: ['./auth-link.component.css']
})
export class AuthLinkComponent implements OnInit {
  @Input() signup: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
