import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitDisplayComponent } from './fruit-display.component';

// This method was adapted from the IIE lab Guide (APDS7311) 2022
// The Independent Institute of Education. 2022. Application development security APDS7311 Lab Guide 2022 (First Edition:2021)

describe('FruitDisplayComponent', () => {
  let component: FruitDisplayComponent;
  let fixture: ComponentFixture<FruitDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
