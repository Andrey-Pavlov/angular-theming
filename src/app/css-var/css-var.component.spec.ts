import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssVarComponent } from './css-var.component';

describe('CssVarComponent', () => {
  let component: CssVarComponent;
  let fixture: ComponentFixture<CssVarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssVarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
