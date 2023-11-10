import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {
    path: 'categorias/:nombre',
    loadChildren: () => import('./pages/categoria/categoria.module').then( m => m.CategoriaPageModule)
  },

 // {
   // path: 'pages',
    //loadChildren: () => import('./pages/pages.module').then( m => m.PagesPageModule)
 // }, 
  //ESTA LA HICE MAL, SIN QUERER. VER DE BORRAR QUE NO SE CÓMO SE HACE

  {
    path: 'productos/:nombre',
    loadChildren: () => import('./pages/detalle-producto/detalle-producto.module').then( m => m.DetalleProductoPageModule)
  }
  // En el GitHub del profesor aparece productos/:nombre en vez de producto. Puede ser eso.
  //Será porque cree detalle-producto fuera de pages y después lo arrastré adentro?
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
