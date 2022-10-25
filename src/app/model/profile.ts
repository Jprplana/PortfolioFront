export class persona {
  id?: number;
  nombre: string;
  apellido: string;
  lugar: string;
  descripcion: string;
  img: string

  constructor(nombre: string, apellido: string, descripcion: string, lugar: string, img: string) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.descripcion = descripcion;
    this.lugar = lugar;
    this.img = img;
  }

}
