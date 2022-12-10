import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
  ChangeEvent,
  CKEditorComponent,
} from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import '../../../shared/interfaces/page-edit';

@Component({
  selector: 'app-page-editor',
  templateUrl: './page-editor.component.html',
  styleUrls: ['./page-editor.component.scss'],
})
export class PageEditorComponent implements OnInit {
  public Editor = ClassicEditor;
  public modulos: Bloque[] = [
    { html: '<p>Hello, world!</p>', col_s: '12', col_g: '12' },
    { html: '<p>aaaa</p>', col_s: '12', col_g: '6' },
  ];
  public tab: string = '0';

  public moduloActual: Bloque = this.modulos[0];
  @ViewChild('myNameElem') myNameElem!: CKEditorComponent;
  @ViewChild('selectNuevoTTelefono') selectNuevoTTelefono!: ElementRef<any>;
  @ViewChild('selectNuevoTPc') selectNuevoTPc!: ElementRef;

  getValue() {
    console.log(this.myNameElem);
  }
  miFormulario: FormGroup = this.fb.group({
    valorSelect: ['0'],
  });

  constructor(private fb: FormBuilder) {
    this.tab = '0';
  }

  ngOnInit(): void {}

  public onChange({ editor }: ChangeEvent) {
    this.modulos[this.miFormulario.value.valorSelect].html = editor.getData();
  }

  public cambioSelect() {
    this.moduloActual = this.modulos[this.miFormulario.value.valorSelect];
    this.myNameElem.writeValue(this.moduloActual.html);
  }

  getTab(): void {
    return console.log(this.tab);
  }

  nuevoBloque() {
    this.modulos.push({
      html: '<p>helloooo</p>',
      col_s: this.selectNuevoTTelefono.nativeElement.value,
      col_g: this.selectNuevoTPc.nativeElement.value,
    });
  }
}
