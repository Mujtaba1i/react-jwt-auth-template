import { Link } from 'react-router'

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to='/Sign-up'>Sign-Up</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar