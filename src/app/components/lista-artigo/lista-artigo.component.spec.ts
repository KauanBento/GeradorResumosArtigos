import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaArtigoComponent } from './lista-artigo.component';

describe('ListaArtigoComponent', () => {
  let component: ListaArtigoComponent;
  let fixture: ComponentFixture<ListaArtigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaArtigoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaArtigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
