
export class Producto{
  private precioFinal:number
  constructor
  (
    public ID:String,
    public nombre:String,
    private descripcion:String,
    public cantidad:number,
    private precio:number,
  )
  {}



  public getId() {
    return this.ID;
  }

  public getNombre() {
    return this.nombre;
  }

  public getDescripcion() {
    return this.descripcion;
  }

  public setCantidad(cantidad: number):void {
    this.cantidad=cantidad;
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
