import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableMapComponent } from './observable-map.component';

describe('ObservableMapComponent', () => {
  let component: ObservableMapComponent;
  let fixture: ComponentFixture<ObservableMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObservableMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
