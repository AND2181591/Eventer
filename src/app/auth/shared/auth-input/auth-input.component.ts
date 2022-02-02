import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { textAppear } from 'src/app/shared/animations/text-appear';

@Component({
  selector: 'app-auth-input',
  templateUrl: './auth-input.component.html',
  styleUrls: ['./auth-input.component.css'], 
  animations: [
    trigger(
      'appear', 
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
                time: '0s', 
                endOpacity: 0
              }
            })
          ]
        )
      ]
    )
  ]
})
export class AuthInputComponent implements OnInit {
  @ViewChild('input') inputElement: ElementRef = {} as ElementRef;
  @Input() control: FormControl | any;
  @Input() label: string = '';
  @Input() type: string = '';

  selected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect() {
    this.selected = true;
    this.inputElement.nativeElement.focus();
  }

  errorControls() {
    return this.control.errors && this.control.dirty && this.control.touched;
  }
}
