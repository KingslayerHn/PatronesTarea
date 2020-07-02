class Direcciones {
  cosntrucor(calle, postal) {
    this.postal = postal;
    this.calle = calle;
  }
}

class Usuario {
  constructor(nombre, { edad, telefono = "31719927", direccion } = {}) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.direccion = direccion;
    this.edad = edad;
  }
  setEdad(edad) {
    this.user.edad = edad;
  }
}

let user = new Usuario("Jose Alexander", {
  edad: 24,
  telefono: "31729898",
  direccion: new Direcciones("5ta ave.", "11011"),
});

console.log(user);
