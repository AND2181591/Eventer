import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors, Validator } from "@angular/forms";

@Injectable({ providedIn: 'root' })
export class MatchPassword implements Validator {
    validate(form: AbstractControl): ValidationErrors | null {
        const { password, confirmPassword } = form.value;

        if (password === confirmPassword) {
            return null;
        }
        
        return { passwordsDontMatch: true };
    }
}