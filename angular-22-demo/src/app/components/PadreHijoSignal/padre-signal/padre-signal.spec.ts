import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PadreSignal } from './padre-signal';

describe('PadreSignal', () => {
  let component: PadreSignal;
  let fixture: ComponentFixture<PadreSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadreSignal],
    }).compileComponents();

    fixture = TestBed.createComponent(PadreSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
