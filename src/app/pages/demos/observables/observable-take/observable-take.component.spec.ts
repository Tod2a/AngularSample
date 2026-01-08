import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableTakeComponent } from './observable-take.component';

describe('ObservableTakeComponent', () => {
  let component: ObservableTakeComponent;
  let fixture: ComponentFixture<ObservableTakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableTakeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObservableTakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
