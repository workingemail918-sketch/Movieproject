import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Moviedet } from './moviedet';

describe('Moviedet', () => {
  let component: Moviedet;
  let fixture: ComponentFixture<Moviedet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Moviedet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Moviedet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
