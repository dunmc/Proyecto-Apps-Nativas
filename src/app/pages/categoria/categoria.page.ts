import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CATEGORIAS } from 'src/app/core/constantes/categorias';
import { Categoria } from 'src/app/core/interfaces/categoria';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage  {

  categoria: Categoria | undefined;

  constructor(
    private activatedRoute : ActivatedRoute
  ) { 
    activatedRoute.params.subscribe(params => {
      this.categoria = CATEGORIAS.find(categoria => categoria.nombre === params['nombre'])
    })
  }

}
