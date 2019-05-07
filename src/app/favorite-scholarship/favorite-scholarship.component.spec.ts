import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteScholarshipComponent } from './favorite-scholarship.component';

describe('FavoriteScholarshipComponent', () => {
  let component: FavoriteScholarshipComponent;
  let fixture: ComponentFixture<FavoriteScholarshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteScholarshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteScholarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
