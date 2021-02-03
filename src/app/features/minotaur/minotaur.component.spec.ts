import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinotaurComponent } from './minotaur.component';

describe('MinotaurComponent', () => {
  let component: MinotaurComponent;
  let fixture: ComponentFixture<MinotaurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinotaurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinotaurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
