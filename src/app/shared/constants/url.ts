const BASE_URL = 'http://localhost:3000';

//Api productos
export const PRODUCTOS_URL = BASE_URL + '/api/productos';
export const PRODUCTOS_LISTAEMPRESAS_URL =
  'http://localhost:3000/api/productos/empresas';
export const PRODUCTOS_BY_SEARCH_URL = PRODUCTOS_URL + '/search/';
export const PRODUCTOS_BY_EMPRESA_URL = PRODUCTOS_URL + '/empresa/';
export const PRODUCTO_BY_ID_URL = PRODUCTOS_URL + '/';

//Api usuarios
export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL + '/api/users/register';
