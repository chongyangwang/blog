import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacktopComponent } from './backtop.component';

describe('BacktopComponent', () => {
  let component: BacktopComponent;
  let fixture: ComponentFixture<BacktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
