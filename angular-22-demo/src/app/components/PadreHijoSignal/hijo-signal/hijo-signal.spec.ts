import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HijoSignal } from './hijo-signal';

describe('HijoSignal', () => {
  let component: HijoSignal;
  let fixture: ComponentFixture<HijoSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HijoSignal],
    }).compileComponents();

    fixture = TestBed.createComponent(HijoSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
