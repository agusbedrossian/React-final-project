function NavBarItem({ description }) {
  return <div>
    <li className="nav-item active has-text-weight-bold">
      <a className="nav-link">{description}</a>
    </li>
  </div>
}

export default NavBarItem;