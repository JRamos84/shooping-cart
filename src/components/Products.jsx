import './products.css'
import { AddToCartIcon } from './Icons'

export function Products({ products }) {
  return (
    <main>
      <ul>
        {products.map((products) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div></div>
          </li>
        ))}
      </ul>
    </main>
  )
}
