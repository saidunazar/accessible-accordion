import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/api/data.service';

@Component({
  selector: 'app-accordion',
  template: `
    <div *ngFor="let faq of faqs">
      <app-accordion-item [faq]="faq"></app-accordion-item>
    </div>
    <div class="error-notification" *ngIf="errorNotification">
      <h3>Service Temporarily Unavailable</h3>
    </div>
  `,
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  faqs: any = [];
  errorNotification = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchFaqs();
  }

  // Method to get faqs and handle response data
  fetchFaqs() {
    this.dataService.getFaqs().subscribe(
      (data) => {
        for (const item of data as any) {
          this.faqs.push({
            id: item.id,
            question: item.question,
            answer: item.answer,
          });
        }
        this.errorNotification = false;
      },
      (error) => {
        this.errorNotification = true;
      }
    );
  }
}
