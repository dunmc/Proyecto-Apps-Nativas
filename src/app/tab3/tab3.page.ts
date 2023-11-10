import { Component } from '@angular/core';
import { CartService } from '../core/services/cart.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public cartService:CartService) {}

  crearMensaje():string {
    let parteProductos = '';
    this.cartService.carrito.forEach(productoCarrito => {
      const mensajeProducto = `- ${productoCarrito.producto.nombre} - ${productoCarrito.cantidad}
      `;
      // No se cómo arreglar este error, no me deja correr el programa.
    parteProductos = parteProductos + mensajeProducto;
        })

// Arriba creo parteProducto y le meto los productos y cantidades del carrito
// Abajo printeo un msj con parteProductp

    const primeraParte = "https://wa.me/+5412345678?text=";
    const segundaParte = `Hola, quiero hacer un pedido:
    ${parteProductos}

Mis datos:
- Nombre: NOMBRE
- Dirección: DIRECCIÓN

Notas:
  ` ;

  const mensaje = encodeURI (primeraParte+segundaParte);
  return mensaje;
}

  realizarPedido(){
    window.open(this.crearMensaje(), '_blank');
    this.cartService.vaciarCarrito();
  }
  
}
// Los backticks `` permuten escribir un string multilínea. Están al lado del enter, con Alt Gráfico