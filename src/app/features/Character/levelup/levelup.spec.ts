import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Levelup } from './levelup';

describe('Levelup', () => {
  let component: Levelup;
  let fixture: ComponentFixture<Levelup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Levelup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Levelup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
