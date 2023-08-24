const ProductCard = ({id, image, title, description, price}) => {
  const addProductInBasket = () => {
    let basket = JSON.parse(localStorage.getItem('basket')) || []
    const index = basket.findIndex(el => el.id === id)
    if (index !== -1) {
      basket[index].count++
    } else {
      basket.push({
        id,
        image,
        title,
        description,
        price,
        count: 1,
      })
    }
    localStorage.setItem('basket', JSON.stringify(basket))
  }

  return (
    <div className={'product-card'}>
      <img src={require(`../assets/images/${image}`)} alt="#" className={'product-card__image'} />
      <h1 className={'product-card__title'}>{title}</h1>
      <p className={'product-card__description'}>{description}</p>
      <p className={'product-card__price'}>{price.toLocaleString()} руб.</p>
      <div className={'product-card__menu'}>
        <img src={require(`../assets/icons/shopping-bag-line.svg`).default} alt="" onClick={addProductInBasket} />
        <img src={require(`../assets/icons/heart_outline.svg`).default} alt="" />
      </div>
    </div>
  )
}

export default ProductCard
