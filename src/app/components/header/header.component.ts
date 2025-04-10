import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) { }

  navegarParaHome() {
    this.router.navigate(['/home']);
  }

  navegarParaArtigos() {
    this.router.navigate(['/artigos']);
  }

  navegarParaCadastro() {
    this.router.navigate(['/cadastrar']);
  }

  alternarTema() {
    document.body.classList.toggle('dark-mode');
    const tema = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    localStorage.setItem('temaPreferido', tema);
  }

  ngOnInit() {
    const temaSalvo = localStorage.getItem('temaPreferido');
    if (temaSalvo === 'dark-mode') {
      document.body.classList.add('dark-mode');
    }
  }

}
