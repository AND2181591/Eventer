import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthInputComponent } from './shared/auth-input/auth-input.component';
import { AuthCardComponent } from './shared/auth-card/auth-card.component';
import { AuthLinkComponent } from './shared/auth-link/auth-link.component';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    AuthInputComponent,
    AuthCardComponent,
    AuthLinkComponent
  ],
  imports: [
    CommonModule, 
    MaterialModule, 
    FlexLayoutModule, 
    ReactiveFormsModule, 
    AuthRoutingModule, 
  ]
})
export class AuthModule { }
