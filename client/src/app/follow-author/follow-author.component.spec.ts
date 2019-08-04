import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowAuthorComponent } from './follow-author.component';

describe('FollowAuthorComponent', () => {
  let component: FollowAuthorComponent;
  let fixture: ComponentFixture<FollowAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
