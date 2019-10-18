import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourceSearchComponent } from './cource-search.component';

describe('CourceSearchComponent', () => {
  let component: CourceSearchComponent;
  let fixture: ComponentFixture<CourceSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourceSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
