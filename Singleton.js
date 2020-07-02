class Singleton {
  static instancia;
  auto = "";
  color = "";

  constructor(auto, color) {
    if (!!Singleton.instancia) {
      return Singleton.instancia;
    }

    Singleton.instancia = this;
    this.auto = auto;
    this.color = color;
    return this;
  }
}

//creando instancias:
const Auto = new Singleton("Toyota", "Negro");
const otroAuto = new Singleton("McLaren", "Naranja");

console.log(Auto);
console.log(otroAuto);
