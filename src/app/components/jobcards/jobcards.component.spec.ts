import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JobcardsComponent } from './jobcards.component';

describe('JobcardsComponent', () => {
  let component: JobcardsComponent;
  let fixture: ComponentFixture<JobcardsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [JobcardsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JobcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
