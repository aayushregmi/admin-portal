import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxTulookupComponent } from './rx-tulookup.component';

describe('RxTulookupComponent', () => {
  let component: RxTulookupComponent;
  let fixture: ComponentFixture<RxTulookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxTulookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxTulookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
