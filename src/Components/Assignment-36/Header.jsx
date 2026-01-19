import { NavLink } from "react-router"

function Header() {
  return (
    <div className="navbar navbar-expand-sm bg-light">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
            <NavLink to='' className='nav-link'>Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to='createProduct' className='nav-link'>CreateProduct</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to='product' className='nav-link'>Product</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header
