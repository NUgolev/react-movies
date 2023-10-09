function Header() {
  return (
    <nav className="blue-grey">
      <div className="nav-wrapper">
        <a href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/VHS_diagonal.svg/2192px-VHS_diagonal.svg.png"
            alt="VHS img"
            width={60}
          />
        </a>
        <a href="#" className="brand-logo">
          React Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="!#">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export { Header }
