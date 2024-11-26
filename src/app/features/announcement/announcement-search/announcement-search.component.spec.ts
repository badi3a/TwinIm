import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementSearchComponent } from './announcement-search.component';

describe('AnnouncementSearchComponent', () => {
  let component: AnnouncementSearchComponent;
  let fixture: ComponentFixture<AnnouncementSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnouncementSearchComponent]
    });
    fixture = TestBed.createComponent(AnnouncementSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
