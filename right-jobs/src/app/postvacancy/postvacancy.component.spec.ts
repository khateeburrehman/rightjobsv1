import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostvacancyComponent } from './postvacancy.component';

describe('PostvacancyComponent', () => {
  let component: PostvacancyComponent;
  let fixture: ComponentFixture<PostvacancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostvacancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostvacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
