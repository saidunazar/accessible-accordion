import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionItemComponent } from './accordion-item.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CssSelector } from '@angular/compiler';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AccordionItemComponent', () => {
  let component: AccordionItemComponent;
  let fixture: ComponentFixture<AccordionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [AccordionItemComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the question id', () => {
    component.faq = { id: 1, question: 'Test Question' };
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.item-id')?.textContent).toContain('Q1');
  });

  it('should render the question', () => {
    component.faq = { id: 1, question: 'Test Question' };
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.item-question')?.textContent).toContain(
      'Test Question'
    );
  });

  it('should render the answer', () => {
    component.faq = {
      id: 1,
      question: 'Test Question',
      answer: 'Test Answer',
    };
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.item-content')?.textContent).toContain(
      'Test Answer'
    );
  });

  it('content should be hidden initially ', () => {
    component.faq = { id: 1, question: 'Test Question' };
    fixture.detectChanges();
    expect(
      fixture.debugElement.nativeElement.querySelector('.item-content')?.style
        .visibility
    ).toBe('hidden');
  });

  it('content should be visible when icon is clicked', () => {
    component.faq = { id: 1, question: 'Test Question' };
    fixture.detectChanges();
    const compiled =
      fixture.debugElement.nativeElement.querySelector('.item-toggle');
    compiled.click();
    fixture.detectChanges();
    let finalEle =
      fixture.debugElement.nativeElement.querySelector('.item-content');
    expect(finalEle?.style.visibility).toBe('');
  });
});
