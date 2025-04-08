import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  alternarTema() {
    const header = document.querySelector('app-header .header-container, app-header .header-container-dark');

    if (header?.classList.contains('header-container')) {
      header.classList.remove('header-container');
      header.classList.add('header-container-dark');
      localStorage.setItem('temaPreferido', 'header-container-dark');
    } else {
      header?.classList.remove('header-container-dark');
      header?.classList.add('header-container');
      localStorage.setItem('temaPreferido', 'header-container');
    }
  }

}
