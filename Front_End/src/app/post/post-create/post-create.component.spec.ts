import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCreateComponent } from './post-create.component';

// This method was adapted from the IIE lab Guide (APDS7311) 2022
// The Independent Institute of Education. 2022. Application development security APDS7311 Lab Guide 2022 (First Edition:2021)

describe('PostCreateComponent', () => {
  let component: PostCreateComponent;
  let fixture: ComponentFixture<PostCreateComponent>;

  // This method was adapted from the IIE lab Guide (APDS7311) 2022
// The Independent Institute of Education. 2022. Application development security APDS7311 Lab Guide 2022 (First Edition:2021)
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
