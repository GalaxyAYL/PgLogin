
export class Producto{
  private precioFinal:number
  constructor
  (
    public id:String,
    public nombre:String,
    private descripcion:String,
    private cantidad:number,
    private precio:number,
  )
  {}

  public parseProducto(producto:String){

  }


  public getId() {
    return this.id;
  }

  public getNombre() {
    return this.nombre;
  }

  public getDescripcion() {
    return this.descripcion;
  }

  public getCantidad() {
    return this.cantidad;
  }

  public getPrecio() {
    return this.precio;
  }

  public calcularPrecio(precio,cantidad:number):number{
    this.precioFinal=cantidad*precio;
    return this.precioFinal;
  }
}
