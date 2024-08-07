import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">EV-olution</div>
      <ul className='nav-menu'>
        <li className='nav-contact'>Home</li>
        <li className='nav-contact'>Explore</li>
        <li className='nav-contact'>About</li>
      </ul>
    </div>
  )
}

export default Navbar
