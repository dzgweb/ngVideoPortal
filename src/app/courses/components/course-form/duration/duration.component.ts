import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationComponent),
      multi: true
    }
  ]
})
export class DurationComponent implements ControlValueAccessor {

  value: number;
  @Input() invalid?: boolean;

  onInput(event): void {
    this.onChanged(event.target.value);
  }

  onBlur(): void {
    this.onTouched();
  }

  writeValue(value: number) {
    if (value !== undefined) {
      this.value = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChanged = fn;
  }

  registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
 }

  private onChanged = (value: number) => {};
  private onTouched = () => {};
}
