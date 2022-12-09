import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Empresa } from 'src/app/shared/models/empresa';

@Component({
  selector: 'app-lista-empresas',
  templateUrl: './lista-empresas.component.html',
  styleUrls: ['./lista-empresas.component.scss'],
})
export class ListaEmpresasComponent implements OnInit {
  empresas?: Empresa[];
  constructor(productoService: ProductoService) {
    productoService.getAllEmpresas().subscribe((serverEmpresas) => {
      this.empresas = serverEmpresas;

      console.log('Resultado ', serverEmpresas);
    });
  }

  ngOnInit(): void {}
}
