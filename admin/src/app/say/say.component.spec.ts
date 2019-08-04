import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayComponent } from './say.component';

describe('SayComponent', () => {
  let component: SayComponent;
  let fixture: ComponentFixture<SayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
