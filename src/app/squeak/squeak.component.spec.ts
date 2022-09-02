import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqueakComponent } from './squeak.component';

describe('SqueakComponent', () => {
  let component: SqueakComponent;
  let fixture: ComponentFixture<SqueakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqueakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqueakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
