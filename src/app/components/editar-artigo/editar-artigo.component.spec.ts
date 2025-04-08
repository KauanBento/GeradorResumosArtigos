import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarArtigoComponent } from './editar-artigo.component';

describe('EditarArtigoComponent', () => {
  let component: EditarArtigoComponent;
  let fixture: ComponentFixture<EditarArtigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarArtigoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarArtigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
