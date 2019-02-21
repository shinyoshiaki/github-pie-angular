/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputNameComponent } from './input-name.component';

describe('InputNameComponent', () => {
  let component: InputNameComponent;
  let fixture: ComponentFixture<InputNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
