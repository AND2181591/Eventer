import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-auth-input',
  templateUrl: './auth-input.component.html',
  styleUrls: ['./auth-input.component.css']
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
