import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PTwoEPageComponent } from './p-two-e-page.component';

describe('PTwoEPageComponent', () => {
  let component: PTwoEPageComponent;
  let fixture: ComponentFixture<PTwoEPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PTwoEPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PTwoEPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
