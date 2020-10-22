import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicElemComponent } from './dynamic-elem.component';

describe('DynamicElemComponent', () => {
  let component: DynamicElemComponent;
  let fixture: ComponentFixture<DynamicElemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicElemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
