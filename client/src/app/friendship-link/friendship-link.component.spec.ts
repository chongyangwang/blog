import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendshipLinkComponent } from './friendship-link.component';

describe('FriendshipLinkComponent', () => {
  let component: FriendshipLinkComponent;
  let fixture: ComponentFixture<FriendshipLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendshipLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendshipLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
