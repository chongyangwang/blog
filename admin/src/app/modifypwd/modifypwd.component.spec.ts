import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifypwdComponent } from './modifypwd.component';

describe('ModifypwdComponent', () => {
  let component: ModifypwdComponent;
  let fixture: ComponentFixture<ModifypwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifypwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifypwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
