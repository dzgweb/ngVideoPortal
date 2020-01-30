import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appAuthorsValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: AuthorsValidatorDirective,
    multi: true
  }]
})
export class AuthorsValidatorDirective {
  validate(control: AbstractControl): ValidationErrors | null {
    return control.value.length ? null : { required: control.value };
  }
}
