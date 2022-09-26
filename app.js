class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {   
      return this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + '/'+ this.model;
    }
  }
  
  var myCar = new Model("Ford", "Mustang");

  console.log(myCar.show());