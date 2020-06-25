import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeResultsComponent } from './anime-results.component';

describe('AnimeResultsComponent', () => {
  let component: AnimeResultsComponent;
  let fixture: ComponentFixture<AnimeResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
