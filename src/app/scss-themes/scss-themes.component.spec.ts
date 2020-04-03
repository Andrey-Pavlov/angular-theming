import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssThemesComponent } from './scss-themes.component';

describe('ScssThemesComponent', () => {
  let component: ScssThemesComponent;
  let fixture: ComponentFixture<ScssThemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScssThemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScssThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
