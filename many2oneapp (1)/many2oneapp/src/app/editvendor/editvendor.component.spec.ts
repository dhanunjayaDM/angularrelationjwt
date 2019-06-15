import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditvenderComponent } from './editvender.component';

describe('EditvenderComponent', () => {
  let component: EditvenderComponent;
  let fixture: ComponentFixture<EditvenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditvenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditvenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
