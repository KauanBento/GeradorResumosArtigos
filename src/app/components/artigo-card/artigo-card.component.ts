import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ArtigoService } from '../../service/artigo.service';
import { InterfaceArtigos } from '../../../interface/interface-artigo';

@Component({
  selector: 'app-artigo-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './artigo-card.component.html',
  styleUrl: './artigo-card.component.css'
})

export class ArtigoCardComponent {

  @Input() artigoData!: InterfaceArtigos;
  
  constructor(private readonly router: Router) { }

  artigoDetalhes() {
    this.router.navigate(['/artigos', this.artigoData.id]);
  }
}
