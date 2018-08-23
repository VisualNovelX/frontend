import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogView } from './blog.view';

describe('BlogView', () => {
  let component: BlogView;
  let fixture: ComponentFixture<BlogView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
