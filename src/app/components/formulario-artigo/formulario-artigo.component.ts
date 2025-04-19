import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArtigoService } from '../../service/artigo.service';
import { InterfaceArtigos } from '../../../interface/interface-artigo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-artigo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-artigo.component.html',
  styleUrl: './formulario-artigo.component.css'
})
export class FormularioArtigoComponent {
  artigo: InterfaceArtigos = {
    id: 0,
    titulo: '',
    autor: '',
    fonte: '',
    url: '',
    conteudo: '',
    resumo: ''
  }

  constructor(
    private readonly artigoService: ArtigoService,
    private readonly router: Router
  ) { }

  salvarArtigo() {
    this.artigoService.addArtigo(this.artigo);
    this.router.navigate(['/artigos']);
  }

}