
type Product = {
  name: string
  cost: number
  inventory: number
};

enum Money {
  penny = .01,
  nickel = .05,
  quarter= .25,
  dollar = 1,
  five = 5,
  ten = 10,
  twenty = 20
}
//Implement Credit Cards


const items: Product[] = [
  {
    name: 'Coke',
    cost: 1.50,
    inventory: 15
  },

  {
    name: 'Sprite',
    cost: 1.25,
    inventory: 10
  },

  {
    name: 'Water',
    cost: 1.50,
    inventory: 20
  },

  {
    name: 'Powdered_Donuts',
    cost: 2.00,
    inventory: 10
  },

  {
    name: 'Cheezits',
    cost: 1.75,
    inventory: 15
  },

  {
    name: 'Doritos',
    cost: 1.50,
    inventory: 10
  }
]

function Selection(){

}

console.log(items)
console.log(items.map(soda => soda.name))









function App(){
  return null
}
export default App