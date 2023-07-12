import { useId } from 'react'
import {
  CartIcon,
  ClearCartIcon,
  RemoveFromCartIcon,
} from '../components/Icons'
import './cart.css'

export function Cart() {
  const cartCheckBoxId = useId()
  return (
    <>
      <label className="cart-button" htmlFor="cart">
        <CartIcon />
      </label>
      <input id={cartCheckBoxId} type="checkbox" hidden />
      <aside className="cart">
        <ul>
          <li>
            <img
              src="https://i.dummyjson.com/data/products/2/thumbnail.jpg"
              alt=""
            />
            <div>
              <strong>Iphone - $1499</strong>
            </div>
            <footer>
              <small>Qty:1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
