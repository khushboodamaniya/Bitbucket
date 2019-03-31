import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieContinerComponent } from './movie-continer.component';

describe('MovieContinerComponent', () => {
  let component: MovieContinerComponent;
  let fixture: ComponentFixture<MovieContinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieContinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieContinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
