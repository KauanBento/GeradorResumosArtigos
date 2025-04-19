import { Injectable } from '@angular/core';
import { InterfaceArtigos } from '../../interface/interface-artigo';

@Injectable({
  providedIn: 'root'
})

export class ArtigoService {

  ArtigoList: InterfaceArtigos[] = [
    {
      id: 1,
      titulo: 'Como a IA está mudando o mundo',
      autor: 'Maria Silva',
      fonte: 'TechNews',
      url: 'https://technews.com/ia-mundo',
      conteudo: 'A inteligência artificial tem se tornado...',
      resumo: 'A IA está impactando diversas áreas...'
    },
    {
      id: 2,
      titulo: 'Futuro da Tecnologia',
      autor: 'João Souza',
      fonte: 'Futuro Digital',
      url: 'https://futuro.com/tecnologia',
      conteudo: 'O futuro será moldado por novas tecnologias...',
      resumo: 'O avanço tecnológico promete mudar...'
    }
  ]


  getAllArtigo(): InterfaceArtigos[] {
    return this.ArtigoList
  }

  getArtigoId(id: number): InterfaceArtigos | undefined {
    return this.ArtigoList.find(artigo => artigo.id === id)
  }

  addArtigo(artigo: InterfaceArtigos): void {
    artigo.id = this.ArtigoList.length + 1;
    this.ArtigoList.push(artigo);
  }

  updateArtigo(id: number, updatedArtigo: InterfaceArtigos): void {
    const index = this.ArtigoList.findIndex(a => a.id === id);
    if (index !== -1) {
      this.ArtigoList[index] = { ...updatedArtigo, id };
    }
  }

  deleteArtigo(id: number): void {
    this.ArtigoList = this.ArtigoList.filter(artigo => artigo.id !== id);
  }
  
}

