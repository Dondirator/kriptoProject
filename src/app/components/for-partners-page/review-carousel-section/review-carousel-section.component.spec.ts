import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewCarouselSectionComponent } from './review-carousel-section.component';

describe('ReviewCarouselSectionComponent', () => {
  let component: ReviewCarouselSectionComponent;
  let fixture: ComponentFixture<ReviewCarouselSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviewCarouselSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewCarouselSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
