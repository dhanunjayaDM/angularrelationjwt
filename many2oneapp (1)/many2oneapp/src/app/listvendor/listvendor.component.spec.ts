import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListvenderComponent } from './listvender.component';

describe('ListvenderComponent', () => {
  let component: ListvenderComponent;
  let fixture: ComponentFixture<ListvenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListvenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListvenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
