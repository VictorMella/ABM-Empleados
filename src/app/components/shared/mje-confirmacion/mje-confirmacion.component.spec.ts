import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MjeConfirmacionComponent } from './mje-confirmacion.component';

describe('MjeConfirmacionComponent', () => {
  let component: MjeConfirmacionComponent;
  let fixture: ComponentFixture<MjeConfirmacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MjeConfirmacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MjeConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
