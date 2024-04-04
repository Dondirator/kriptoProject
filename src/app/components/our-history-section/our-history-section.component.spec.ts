import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurHistorySectionComponent } from './our-history-section.component';

describe('OurHistorySectionComponent', () => {
  let component: OurHistorySectionComponent;
  let fixture: ComponentFixture<OurHistorySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurHistorySectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurHistorySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
