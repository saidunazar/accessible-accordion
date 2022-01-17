import {
  waitForAsync,
  ComponentFixture,
  TestBed,
  inject,
  tick,
  fakeAsync,
} from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AccordionComponent } from './accordion.component';
import { DataService } from '../shared/api/data.service';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AccordionComponent],
      providers: [DataService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the faq when faqs are returned', () => {
    component.faqs = [{ id: 1, question: 'Test Question' }];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-accordion-item')).toBeTruthy();
  });

  it('should not render the faq when response is empty', () => {
    component.faqs = [];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-accordion-item')).toBeFalsy();
  });
});
