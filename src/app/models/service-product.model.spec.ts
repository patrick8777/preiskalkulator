import { ServiceProduct } from './service-product.model';

describe('ServiceProduct', () => {
  it('should create an instance', () => {
    expect(new ServiceProduct("name",0)).toBeTruthy();
  });
  it('should return specifid name',()=> {
    let p = new ServiceProduct("name",0);
    expect(p.getName()).toEqual("name");
  });
  it('should return specifid price',()=> {
    let p = new ServiceProduct("name",5);
    expect(p.getPreis()).toEqual(5);
  });
  it('should generate id for every product',()=> {
    let p1 = new ServiceProduct("name",5);
    let p2 = new ServiceProduct("name",5);
    expect(p1.getId()).not.toEqual(p2.getId());
  });
  it('should not allow empty names',()=> {
    expect(()=>new ServiceProduct("",5)).toThrow();
    expect(()=>new ServiceProduct(" ",5)).toThrow();
  });
  it('should not accept neagtive prices',()=> {
    expect(()=>new ServiceProduct("D",5)).toBeTruthy();
    expect(()=>new ServiceProduct("H",0)).toBeTruthy();
    expect(()=>new ServiceProduct("H",-1)).toThrow();
  });
  it('should emit Service Product',()=> {
    expect(()=>new ServiceProduct("",5)).toThrow();
    expect(()=>new ServiceProduct(" ",5)).toThrow();
  });
});
