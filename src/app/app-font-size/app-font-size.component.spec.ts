import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFontSizeComponent } from './app-font-size.component';

describe('AppFontSizeComponent', () => {
  let component: AppFontSizeComponent;
  let fixture: ComponentFixture<AppFontSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFontSizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFontSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
