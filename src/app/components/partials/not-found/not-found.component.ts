import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  @Input()
  visible = false;
  @Input()
  notFoundMessage = 'No se encontro ningun producto';
  @Input()
  resetLinkText = 'Ir a la pagina principal';
  @Input()
  resetLinkRoute = '/home';
  constructor() {}

  ngOnInit(): void {}
}
