import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeAboutComponent } from './home-about.component';

describe('HomeAboutComponent', () => {
  let component: HomeAboutComponent;
  let fixture: ComponentFixture<HomeAboutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HomeAboutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
