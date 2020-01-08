// Pattern characters
// Prototype
import { Query } from './Query'
// Concret prototype
import { User } from './User'
import { Product } from './Products'
// Client
const query: Query = new User('dba1', 'alejo', 'users')
const productQuery: Query = new Product('dba1', 'carmen', 'products')

const userQueries: Query[] = []
const productQueries: Query[] = []

for(let i = 0; i < 10; i++) {
  const newQuery: Query = query.clone()
  const newProductQuery = productQuery.clone()

  newQuery.user = `${newQuery.user}${i}`
  newProductQuery.user = `${newProductQuery.user}${i}`

  userQueries.push(newQuery)
  productQueries.push(newProductQuery)
}

console.log(userQueries)
console.log(productQueries)