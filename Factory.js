function tresLeches(sabor, precio, tipo) {
  this.sabor = sabor;
  this.precio = precio;
  this.tipo = tipo;
}
function Seco(sabor, precio, tipo) {
  this.sabor = sabor;
  this.precio = precio;
  this.tipo = tipo;
}
function Boda(sabor, precio, tipo) {
  this.sabor = sabor;
  this.precio = precio;
  this.tipo = tipo;
}

function FabricaPasteles() {
  this.crearPastel = (sabor, precio, tipo) => {
    switch (tipo) {
      case "tres leches":
        return new tresLeches(sabor, precio, tipo);
        break;
      case "Seco":
        return new Seco(sabor, precio, tipo);
        break;
      case "Boda":
        return new Boda(sabor, precio, tipo);
        break;
    }
  };
}

const PastelesFactory = new FabricaPasteles();
const pasteles = [];

pasteles.push(PastelesFactory.crearPastel("chocolate", 200, "tres leches"));
pasteles.push(PastelesFactory.crearPastel("Caramelo", 350, "Seco"));
pasteles.push(PastelesFactory.crearPastel("Vainilla", 1250, "Boda"));

pasteles.forEach((pastel) => {
  console.log(pastel);
});
