import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommiteComponent } from './commite.component';

describe('CommiteComponent', () => {
  let component: CommiteComponent;
  let fixture: ComponentFixture<CommiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
