import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IconTemplatePage } from './icon-template.page';

describe('BasicPage', () => {
  let component: IconTemplatePage;
  let fixture: ComponentFixture<IconTemplatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconTemplatePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconTemplatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
