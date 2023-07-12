import { useFilters } from '../hooks/useFilters'
import './footer.css'
export function Footer() {
  const { filters } = useFilters()
  return (
    <footer className="footer">
      {JSON.stringify(filters, null, 2)}
      {/* <h4>Ejeccicio Shooping cart</h4>
      <span>José Ramos</span>
      <h5>Shopping Cart con React</h5> */}
    </footer>
  )
}
