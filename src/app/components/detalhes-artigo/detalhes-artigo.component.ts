import { Component, OnInit } from '@angular/core';
import { ArtigoService } from '../../service/artigo.service';
import { InterfaceArtigos } from '../../../interface/interface-artigo';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detalhes-artigo',
  standalone: true,
  imports: [],
  templateUrl: './detalhes-artigo.component.html',
  styleUrl: './detalhes-artigo.component.css'
})
export class DetalhesArtigoComponent implements OnInit {

  artigo: InterfaceArtigos | undefined;

  constructor(private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly artigoService: ArtigoService,
    private readonly location: Location) { }


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.artigo = this.artigoService.getArtigoId(id);
  }

  voltarPagina(): void {
    this.location.back();
  }

  editarCard() {
    this.router.navigate(['/editar', this.artigo!.id])
  }

}
