import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardChangesInicioComponent } from './hard-changes-inicio.component';

describe('HardChangesInicioComponent', () => {
  let component: HardChangesInicioComponent;
  let fixture: ComponentFixture<HardChangesInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardChangesInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardChangesInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
