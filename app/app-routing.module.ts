import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'libros',
    loadChildren: () => import('./pages/libros/libros.module').then( m => m.LibrosPageModule)
  },
  {
    path: 'listado-libros',
    loadChildren: () => import('./pages/listado-libros/listado-libros.module').then( m => m.ListadoLibrosPageModule)
  },
  {
    path: 'listado-titulo',
    loadChildren: () => import('./pages/listado-titulo/listado-titulo.module').then( m => m.ListadoTituloPageModule)
  },
  {
    path: 'listado-autor',
    loadChildren: () => import('./pages/listado-autor/listado-autor.module').then( m => m.ListadoAutorPageModule)
  },
  {
    path: 'listado-resumen',
    loadChildren: () => import('./pages/listado-resumen/listado-resumen.module').then( m => m.ListadoResumenPageModule)
  },
  {
    path: 'buscar',
    loadChildren: () => import('./pages/buscar/buscar.module').then( m => m.BuscarPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
