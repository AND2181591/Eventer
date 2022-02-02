import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { textAppear } from 'src/app/shared/animations/text-appear';
import { MatchPassword } from '../validators/match-password';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'], 
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
                time: '.2s', 
                endOpacity: 1
              }
            })
          ]
        ), 
        transition(
          ':leave', 
          [
            useAnimation(textAppear, {
              params: {
                startOpacity: 1, 
                time: '.1s', 
                endOpacity: 0
              }
            })
          ]
        )
      ]
    )
  ]
})
export class SignUpComponent implements OnInit {

  signupForm = new FormGroup({
    email: new FormControl('', [
      Validators.required, 
      Validators.email
    ]), 
    password: new FormControl('', [
      Validators.required, 
      Validators.minLength(4), 
      Validators.maxLength(20)
    ]), 
    confirmPassword: new FormControl('', [
      Validators.required, 
      Validators.minLength(4), 
      Validators.maxLength(20)
    ])
  }, { validators: this.matchPassword.validate });

  constructor(
    private matchPassword: MatchPassword
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
