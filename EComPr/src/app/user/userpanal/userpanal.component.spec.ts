import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpanalComponent } from './userpanal.component';

describe('UserpanalComponent', () => {
  let component: UserpanalComponent;
  let fixture: ComponentFixture<UserpanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserpanalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
