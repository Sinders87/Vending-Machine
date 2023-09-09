type Product = {
  name: string;
  cost: number;
  inventory: number;
};

enum Money {
  penny = 0.01,
  nickel = 0.05,
  quarter = 0.25,
  dollar = 1,
  five = 5,
  ten = 10,
  twenty = 20,
}
//Implement Credit Cards

const Products = [
  {
    name: "Coke",
    cost: 1.5,
    inventory: 15,
  },

  {
    name: "Sprite",
    cost: 1.25,
    inventory: 10,
  },

  {
    name: "Water",
    cost: 1.5,
    inventory: 20,
  },

  {
    name: "Powdered Donuts",
    cost: 2.0,
    inventory: 10,
  },

  {
    name: "Cheezits",
    cost: 1.75,
    inventory: 15,
  },

  {
    name: "Doritos",
    cost: 1.5,
    inventory: 10,
  },
];


function Selection() {

  const productNames = Products.map(product => <li>{product.name}</li>);
  const productCosts = Products.map(product => <li>{product.cost}</li>);

  return(
    <div>

    <h1>Virtual Vending Machine</h1>
    <ul>{productNames}</ul>
    

    </div>
    
)}



//console.log(items);
//console.log(items.map((soda) => soda.name));


export default Selection;
