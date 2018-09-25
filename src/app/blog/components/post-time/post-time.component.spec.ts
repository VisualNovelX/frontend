import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTimeComponent } from './post-time.component';

describe('PostTimeComponent', () => {
  let component: PostTimeComponent;
  let fixture: ComponentFixture<PostTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
