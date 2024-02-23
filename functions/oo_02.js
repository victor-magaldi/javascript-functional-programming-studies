class Produto {
  constructor(name, price, desc = 0.15) {
    this._name = name;
    this.price = price;
    this.desc = desc;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
  get sellingPrice() {
    return this.price * (1 - this.desc);
  }
}

const p1 = new Produto("Geladeira", 2000);
const p2 = new Produto("Caneta", 10, 0.1);

console.log(p1);
console.log(`Preço final da ${p1.name}:`, p1.sellingPrice);

console.log(p2);
console.log(p2.name);
p2.name = "Novo nome do produto 2";

console.log(`Preço final da ${p2.name}:`, p2.sellingPrice);
