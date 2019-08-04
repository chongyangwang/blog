import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayInsertComponent } from './say-insert.component';

describe('SayInsertComponent', () => {
  let component: SayInsertComponent;
  let fixture: ComponentFixture<SayInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
