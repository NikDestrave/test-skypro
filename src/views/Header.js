const Header = () => {
  return (
    <header className={'header'}>
      <h2 className={'header__title'}>Интерьер.</h2>
      <nav className="header__menu">
        <ul>
          <li>
            <a href="#">Каталог</a>
          </li>
          <li>
            <a href="#">Корзина</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
