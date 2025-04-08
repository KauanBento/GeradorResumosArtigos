import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaBuscaComponent } from './pagina-busca.component';

describe('PaginaBuscaComponent', () => {
  let component: PaginaBuscaComponent;
  let fixture: ComponentFixture<PaginaBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaBuscaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
