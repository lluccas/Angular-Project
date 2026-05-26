import { Component } from '@angular/core';
import{ FormsModule } from '@angular/forms';
import { ItemLista } from './itemlista'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-compras',
  imports: [ FormsModule, CommonModule ],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {

  item: string = '';
  lista: ItemLista[] = [];

  adicionarItem(){
    let itemlista = new ItemLista();
    itemlista.nome = this.item; 
    itemlista.id = this.lista.length + 1;

    this.lista.push(itemlista);

    this.item = '';
  }

  riscarItem(itemLista: ItemLista){
    itemLista.comprado = !itemLista.comprado;
  }

  limparLita(){
    this.lista = [];
  }

}
