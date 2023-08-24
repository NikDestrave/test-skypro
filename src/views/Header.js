import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className={'header'}>
      <h2 className={'header__title'}>Интерьер.</h2>
      <nav className="header__menu">
        <ul>
          <li>
            <Link to="/">Каталог</Link>
          </li>
          <li>
            <Link to="/basket">Корзина</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
