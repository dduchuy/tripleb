import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpwordComponent } from './resetpword.component';

describe('ResetpwordComponent', () => {
  let component: ResetpwordComponent;
  let fixture: ComponentFixture<ResetpwordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetpwordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetpwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
