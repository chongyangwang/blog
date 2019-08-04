import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleInsertComponent } from './article-insert.component';

describe('ArticleInsertComponent', () => {
  let component: ArticleInsertComponent;
  let fixture: ComponentFixture<ArticleInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
