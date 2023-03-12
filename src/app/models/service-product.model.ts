export class ServiceProduct {
  private id: number;
  private static nextId: number = 1;
  private name!: string;  
  private preis!: number;
  constructor(name:string, preis:number) {
    this.id = ServiceProduct.getNextId();
    this.setName(name);
    this.setPreis(preis);
  }
  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getPreis() {
    return this.preis;
  }
  private static getNextId() {
    return ServiceProduct.nextId++;
  }
  public setName(name:string){
    if(name.trim().length==0){
      throw new Error("Name must not be empty")
    }
    this.name=name;
  }
  public setPreis(preis:number){
    if(preis<0){
      throw new Error("Preis must not be negativ")
      
    }
    this.preis = preis;
  }
}
