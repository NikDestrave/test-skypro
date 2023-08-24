const BasketList = ({elements, onTotalUpdate}) => {
  const min = 1
  const max = 10

  const deleteBasket = (index) => {
    let basket = JSON.parse(localStorage.getItem('basket'))
    basket.splice(index, 1);
    localStorage.setItem('basket', JSON.stringify(basket))
    onTotalUpdate()
  }

  const updateBasket = (index, value) => {
    let basket = JSON.parse(localStorage.getItem('basket'))
    basket[index].count = value
    localStorage.setItem('basket', JSON.stringify(basket))
    onTotalUpdate()
  }

  return (
    <div className={'basket-list'}>
      <div className={'head-table'}>Товар</div>
      <div className={'head-table'}>К-во</div>
      {elements.map((el, i) => (
        <>
          <div className={'cell-table product-card'}>
            <img src={require(`../assets/images/${el.image}`)} alt="#" className={'product-card__image'} />
            <div className={'product-card__content'}>
              <h1 className={'product-card__title'}>{el.title}</h1>
              <p className={'product-card__description'}>{el.description}</p>
              <p className={'product-card__price'}>{el.price.toLocaleString()} руб.</p>
              <div className={'product-card__bottom-menu'}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#">Избранные</a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" onClick={() => deleteBasket(i)}>Удалить</a>
              </div>
            </div>
          </div>
          <div className={'cell-table product-counter'}>
            <input
              type="number"
              min={min}
              max={max}
              defaultValue={el.count}
              onChange={e => updateBasket(i, e.target.value)}
            />
          </div>
        </>
      ))}
    </div>
  )
}

export default BasketList
