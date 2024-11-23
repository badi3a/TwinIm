import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAnnouncementComponent } from './card-announcement.component';

describe('CardAnnouncementComponent', () => {
  let component: CardAnnouncementComponent;
  let fixture: ComponentFixture<CardAnnouncementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAnnouncementComponent]
    });
    fixture = TestBed.createComponent(CardAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
