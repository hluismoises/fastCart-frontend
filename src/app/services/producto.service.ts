import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_Empresas, sample_Productos } from 'src/data';
import {
  PRODUCTOS_BY_EMPRESA_URL,
  PRODUCTOS_BY_SEARCH_URL,
  PRODUCTOS_LISTAEMPRESAS_URL,
  PRODUCTOS_URL,
  PRODUCTO_BY_ID_URL,
} from '../shared/constants/url';
import { Empresa } from '../shared/models/empresa';
import { Producto } from '../shared/models/Producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>(PRODUCTOS_URL);
  }

  getAllProductosSearchTerm(searchTerm: string) {
    return this.http.get<Producto[]>(PRODUCTOS_BY_SEARCH_URL + searchTerm);
  }

  getAllEmpresas(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(PRODUCTOS_LISTAEMPRESAS_URL);
  }

  getAllProductosEmpresa(empresa: string): Observable<Producto[]> {
    return empresa === 'All'
      ? this.getAll()
      : this.http.get<Producto[]>(PRODUCTOS_BY_EMPRESA_URL + empresa);
  }

  getProductoId(productoId: string): Observable<Producto> {
    return this.http.get<Producto>(PRODUCTO_BY_ID_URL + productoId);
  }
}
