import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitCreateComponent } from './fruit-create.component';

// This method was adapted from the IIE lab Guide (APDS7311) 2022
// The Independent Institute of Education. 2022. Application development security APDS7311 Lab Guide 2022 (First Edition:2021)

describe('FruitCreateComponent', () => {
  let component: FruitCreateComponent;
  let fixture: ComponentFixture<FruitCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
