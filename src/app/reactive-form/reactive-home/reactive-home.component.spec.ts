import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveHomeComponent } from './reactive-home.component';

describe('ReactiveHomeComponent', () => {
  let component: ReactiveHomeComponent;
  let fixture: ComponentFixture<ReactiveHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
