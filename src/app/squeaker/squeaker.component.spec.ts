import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqueakerComponent } from './squeaker.component';

describe('SqueakerComponent', () => {
  let component: SqueakerComponent;
  let fixture: ComponentFixture<SqueakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqueakerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqueakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
