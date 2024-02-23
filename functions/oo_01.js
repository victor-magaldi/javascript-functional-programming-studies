// função construtora
function Produto(name, price, desc = 0.15) {
  this.name = name;
  this.price = price;
  this.desc = desc;

  this.sellingPrice = () => this.price * (1 - this.desc);
}

const p1 = new Produto("Geladeira", 2000);
const p2 = new Produto("Caneta", 10, 0.1);

console.log(p1);
console.log(`Preço final da ${p1.name}:`, p1.sellingPrice());

console.log(p2);
console.log(`Preço final da ${p2.name}:`, p2.sellingPrice());
