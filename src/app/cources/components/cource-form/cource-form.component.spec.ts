import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourceFormComponent } from './cource-form.component';

describe('CourceFormComponent', () => {
  let component: CourceFormComponent;
  let fixture: ComponentFixture<CourceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
