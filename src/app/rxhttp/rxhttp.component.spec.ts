import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxhttpComponent } from './rxhttp.component';

describe('RxhttpComponent', () => {
  let component: RxhttpComponent;
  let fixture: ComponentFixture<RxhttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxhttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxhttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
