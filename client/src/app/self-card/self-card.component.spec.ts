import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfCardComponent } from './self-card.component';

describe('SelfCardComponent', () => {
  let component: SelfCardComponent;
  let fixture: ComponentFixture<SelfCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
