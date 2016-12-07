/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AsideComponent } from './aside.component';
import {RouterModule, Router } from '@angular/router';

describe('AsideComponent', () => {
  let component: AsideComponent;
  let fixture: ComponentFixture<AsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideComponent ],
      providers:[{provide:Router}],
      imports: [ RouterModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
