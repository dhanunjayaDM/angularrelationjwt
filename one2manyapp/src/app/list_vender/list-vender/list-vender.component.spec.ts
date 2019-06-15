import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVenderComponent } from './list-vender.component';

describe('ListVenderComponent', () => {
  let component: ListVenderComponent;
  let fixture: ComponentFixture<ListVenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
