import { AbstractControl } from '@angular/forms';

export function ValidateIsNumbers(control: AbstractControl) {
  if (control.pristine) {
    return null;
  }

  if (Number.isNaN(+control.value)) {
    return { isNumbers: true };
  }
  return null;
}
