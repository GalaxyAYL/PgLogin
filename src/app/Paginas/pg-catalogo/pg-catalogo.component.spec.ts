import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgCatalogoComponent } from './pg-catalogo.component';

describe('PgCatalogoComponent', () => {
  let component: PgCatalogoComponent;
  let fixture: ComponentFixture<PgCatalogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgCatalogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
