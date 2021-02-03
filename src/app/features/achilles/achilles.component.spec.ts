import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchillesComponent } from './achilles.component';

describe('AchillesComponent', () => {
  let component: AchillesComponent;
  let fixture: ComponentFixture<AchillesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchillesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AchillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
