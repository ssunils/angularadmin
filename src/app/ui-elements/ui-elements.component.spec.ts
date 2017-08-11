import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiElementsComponent } from './ui-elements.component';

describe('UiElementsComponent', () => {
  let component: UiElementsComponent;
  let fixture: ComponentFixture<UiElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
