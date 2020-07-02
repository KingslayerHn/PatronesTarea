// Subasta

function subasta() {
  this.compradores = [];
}

subasta.prototype = {
  participar: function (fn) {
    this.compradores.push(fn);
  },
  salir: function (remove) {
    this.compradores = this.compradores.filter((fn) => {
      if (fn != remove) return fn;
    });
  },
  subastar: function () {
    this.compradores.forEach((fn) => {
      fn.call();
    });
  },
};

// realizar subasta
const sbs = new subasta();

function jugador1() {
  console.log("jugador 1 ofrece $200");
}

sbs.participar(jugador1);

function jugador2() {
  console.log("jugador 2 ofrece $250");
}
sbs.participar(jugador2);

function jugador3() {
  console.log("jugador 3 ofrece $500");
}
sbs.participar(jugador3);

sbs.subastar();
