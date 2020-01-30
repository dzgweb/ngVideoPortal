import { Component, forwardRef, Input, ViewChild, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

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
  @ViewChild('authorsInput', {static: false}) authorsInputRef: ElementRef<HTMLInputElement>;

  private filterText: string;

  constructor() { }

  getFilterInputPlaceholder() {
    return !this.selectedOptions.length ? 'Start typing' : '';
  }

  onOptionDeselected(index: number) {
    const deselectOptions = this.selectedOptions[index];
    this.selectedOptions.splice(index, 1);
    this.options.push(deselectOptions);
    this.onChanged(this.selectedOptions);
  }

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

  onBlur(): void {
    this.onTouched();
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const selectedLabel = event.option.viewValue;
    const selectedOption = this.getOption(selectedLabel);
    this.selectedOptions.push(selectedOption);
    this.onChanged(this.selectedOptions);
    console.log(this.selectedOptions);
    this.authorsInputRef.nativeElement.blur();
  }

  onFilterInput(event) {
    this.filterText = event.target.value.toLowerCase();
  }

  getAvailableOptions() {
    return this.options ?
      this.options.filter(option => option.label.toLowerCase().includes(this.filterText) && !this.isSelected(option)) : [];
  }

  private isSelected(option) {
    return this.selectedOptions.some(selectedOption => selectedOption.id === option.id);
  }

  private getOption(label: string): any {
    return this.options.find(option => option.label === label);
  }

  private onChanged = (value: AuthorOptions[]) => {};
  private onTouched = () => {};

}
