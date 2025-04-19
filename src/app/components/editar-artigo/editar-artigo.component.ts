import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArtigoService } from '../../service/artigo.service';
import { InterfaceArtigos } from '../../../interface/interface-artigo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-artigo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-artigo.component.html',
  styleUrl: './editar-artigo.component.css'
})
export class EditarArtigoComponent implements OnInit {
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
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    const artigoExistente = this.artigoService.getArtigoId(id);
    if (artigoExistente) {
      this.artigo = { ...artigoExistente };
    }
    else {
      this.router.navigate(['/artigos']);
    }
  }

  editarArtigo(): void {
    this.artigoService.updateArtigo(this.artigo.id!, this.artigo);
    this.router.navigate(['/artigos']);
  }
}
