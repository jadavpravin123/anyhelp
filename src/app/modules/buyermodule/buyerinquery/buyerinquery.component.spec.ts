import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerinqueryComponent } from './buyerinquery.component';

describe('BuyerinqueryComponent', () => {
  let component: BuyerinqueryComponent;
  let fixture: ComponentFixture<BuyerinqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerinqueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerinqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
