import { Component, forwardRef, Input, ViewChild, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';

import { AuthorOptions } from '../../../models';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorsComponent),
      multi: true
    }
  ]
})
export class AuthorsComponent implements ControlValueAccessor {
  selectedOptions: AuthorOptions[] = [];

  @Input() options: AuthorOptions[];
  @ViewChild('authorsInput', {static: false}) authorsInput: ElementRef<HTMLInputElement>;

  constructor() { }

  writeValue(options: AuthorOptions[]) {
    this.selectedOptions = options;
  }

  registerOnChange(fn: any) {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  onInput(event) {
    this.onChanged(event.target.value);
  }

  private onChanged = (value: AuthorOptions[]) => {};
  private onTouched = () => {};
}
