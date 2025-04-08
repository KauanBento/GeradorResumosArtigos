import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioArtigoComponent } from './formulario-artigo.component';

describe('FormularioArtigoComponent', () => {
  let component: FormularioArtigoComponent;
  let fixture: ComponentFixture<FormularioArtigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioArtigoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioArtigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
