import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelleinfoComponent } from './selleinfo.component';

describe('SelleinfoComponent', () => {
  let component: SelleinfoComponent;
  let fixture: ComponentFixture<SelleinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelleinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelleinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
