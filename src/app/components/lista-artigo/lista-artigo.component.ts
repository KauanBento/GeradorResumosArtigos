import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ArtigoCardComponent } from '../artigo-card/artigo-card.component';
import { ArtigoService } from '../../service/artigo.service';
import { InterfaceArtigos } from '../../../interface/interface-artigo';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-lista-artigo',
  standalone: true,
  imports: [ArtigoCardComponent, CommonModule],
  templateUrl: './lista-artigo.component.html',
  styleUrl: './lista-artigo.component.css'
})

export class ListaArtigoComponent {

  constructor(
    private readonly router: Router,
    private readonly artigoService: ArtigoService,
    ) { }

  artigoList: InterfaceArtigos[] = [];

  ngOnInit() {
    this.artigoList = this.artigoService.getAllArtigo();
  }

  navegarParaEditar() {
    this.router.navigate(['/cadastrar']);
  }
}
