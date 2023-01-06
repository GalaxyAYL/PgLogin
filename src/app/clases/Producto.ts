export class Producto{
  private precioFinal:number
  constructor
  (
    public ID:String,
    private descripcion:String,
    private cantidad:number,
    private precio:number,

  )
  {}

  public getDescripcion():String {
    return this.descripcion;
  }

  public getCantidad():number {
    return this.cantidad;
  }

  public getPrecio():number {
    return this.precio;
  }

  public calcularPrecio(precio,cantidad:number):number{
    this.precioFinal=cantidad*precio;
    return this.precioFinal;
  }
}
