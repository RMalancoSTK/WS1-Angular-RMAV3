import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDataComponenComponent } from './input-data-componen.component';

describe('InputDataComponenComponent', () => {
  let component: InputDataComponenComponent;
  let fixture: ComponentFixture<InputDataComponenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDataComponenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDataComponenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
