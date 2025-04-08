import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesArtigoComponent } from './detalhes-artigo.component';

describe('DetalhesArtigoComponent', () => {
  let component: DetalhesArtigoComponent;
  let fixture: ComponentFixture<DetalhesArtigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesArtigoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesArtigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
