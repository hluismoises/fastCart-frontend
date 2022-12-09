import { Empresa } from './app/shared/models/empresa';
import { Producto } from './app/shared/models/Producto';

export const sample_Productos: Producto[] = [
  {
    id: '638f774b1923cd5a6a53c75c',
    nombre: 'Monitor Gamer',
    precio: 250,
    empresas: ['Start Technology'],
    favorito: false,
    imageUrl:
      'https://www.profesionalreview.com/wp-content/uploads/2020/08/Monitor-gaming-02.jpg',
    categorias: ['Electronicos', 'Gamer', 'Monitores'],
    descripcion: 'Monitor Gamer Gigabyte 27in, 4k',
  },
  {
    id: '638f85af1923cd5a6a53c75f',
    nombre: 'Monitor Gamer',
    precio: 250,
    empresas: ['Start Technology'],
    favorito: false,
    imageUrl:
      'https://www.profesionalreview.com/wp-content/uploads/2020/08/Monitor-gaming-02.jpg',
    categorias: ['Electronicos', 'Gamer', 'Monitores'],
    descripcion: 'Monitor Gamer Gigabyte 27in, 4k',
  },
  {
    id: '638f8b9c738ea00f1cde2a22',
    nombre: 'Monitor Pro',
    precio: 250,
    empresas: ['Dreams'],
    favorito: false,
    imageUrl:
      'https://www.profesionalreview.com/wp-content/uploads/2020/08/Monitor-gaming-02.jpg',
    categorias: ['Electronicos', 'Gamer', 'Monitores'],
    descripcion: 'Monitor Gamer Gigabyte 27in, 4k',
  },
  {
    id: '638f8b2f3b21d8346e9c71a4',
    nombre: 'Monitor Estandar',
    precio: 250,
    empresas: ['New Space'],
    favorito: false,
    imageUrl:
      'https://www.profesionalreview.com/wp-content/uploads/2020/08/Monitor-gaming-02.jpg',
    categorias: ['Electronicos', 'Gamer', 'Monitores'],
    descripcion: 'Monitor Gamer Gigabyte 27in, 4k',
  },
];

export const sample_Empresas: Empresa[] = [
  { nombre: 'Start Technology' },
  { nombre: 'New Space' },
  { nombre: 'Dreams' },
  { nombre: 'All' },
];
