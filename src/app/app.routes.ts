import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormularioArtigoComponent } from './components/formulario-artigo/formulario-artigo.component';
import { DetalhesArtigoComponent } from './components/detalhes-artigo/detalhes-artigo.component';
import { ListaArtigoComponent } from './components/lista-artigo/lista-artigo.component';
import { EditarArtigoComponent } from './components/editar-artigo/editar-artigo.component';
import { NaoEncontradaComponent } from './components/nao-encontrada/nao-encontrada.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'cadastrar', component: FormularioArtigoComponent },
    { path: 'artigos/:id', component: DetalhesArtigoComponent },
    { path: 'artigos', component: ListaArtigoComponent },
    { path: 'editar/:id', component: EditarArtigoComponent },
    { path: '**', component: NaoEncontradaComponent }
];