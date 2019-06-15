import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVenderComponent } from './edit-vender.component';

describe('EditVenderComponent', () => {
  let component: EditVenderComponent;
  let fixture: ComponentFixture<EditVenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
