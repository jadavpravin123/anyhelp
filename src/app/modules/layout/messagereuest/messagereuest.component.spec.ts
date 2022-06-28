import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagereuestComponent } from './messagereuest.component';

describe('MessagereuestComponent', () => {
  let component: MessagereuestComponent;
  let fixture: ComponentFixture<MessagereuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagereuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagereuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
