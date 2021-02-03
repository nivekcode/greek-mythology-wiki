import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HadesComponent } from './hades.component';

describe('HadesComponent', () => {
  let component: HadesComponent;
  let fixture: ComponentFixture<HadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
