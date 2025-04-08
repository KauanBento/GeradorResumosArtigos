import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeradorResumoComponent } from './gerador-resumo.component';

describe('GeradorResumoComponent', () => {
  let component: GeradorResumoComponent;
  let fixture: ComponentFixture<GeradorResumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeradorResumoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeradorResumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
