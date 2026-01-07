import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableTapComponent } from './observable-tap.component';

describe('ObservableTapComponent', () => {
  let component: ObservableTapComponent;
  let fixture: ComponentFixture<ObservableTapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableTapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObservableTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
