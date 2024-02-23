// função construtora
function Produto(name, price, desc = 0.15) {
  this.name = name;
  this.price = price;
  this._desc = desc;

  this.sellingPrice = () => this.price * (1 - this._desc);
}

Produto.prototype.log = function () {
  console.log("Dados do produto=>", this.name, this.price);
};

Object.defineProperty(Produto.prototype, "descCustom", {
  get: function () {
    return this._desc;
  },
  set: function (newValue) {
    this._desc = newValue;
  },
});
const p1 = new Produto("Geladeira", 2000);
p1.descCustom = 0.9;
console.log("desconto com método customizado", p1.descCustom);

const p2 = new Produto("Caneta", 10, 0.1);

console.log(p1);
p1.log();
console.log(`Preço final da ${p1.name}:`, p1.sellingPrice());

console.log(p2);
console.log(`Preço final da ${p2.name}:`, p2.sellingPrice());
