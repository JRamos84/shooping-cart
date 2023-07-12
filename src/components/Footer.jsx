import { useCart } from '../hooks/useCart'
import { useFilters } from '../hooks/useFilters'
import './footer.css'
export function Footer() {
  const { filters } = useFilters()
  const { cart } = useCart()
  return (
    <footer className="footer">
      {JSON.stringify(filters, null, 2)}
      {JSON.stringify(cart, null, 2)}
      {/* <h4>Ejeccicio Shooping cart</h4>
      <span>José Ramos</span>
      <h5>Shopping Cart con React</h5> */}
    </footer>
  )
}
