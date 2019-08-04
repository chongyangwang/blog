import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionInsertComponent } from './collection-insert.component';

describe('CollectionInsertComponent', () => {
  let component: CollectionInsertComponent;
  let fixture: ComponentFixture<CollectionInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
