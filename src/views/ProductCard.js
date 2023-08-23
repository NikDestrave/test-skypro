const ProductCard = ({image, title, description, price}) => {
  return (
    <div className={'product-card'}>
      <img src={require(`../assets/images/${image}`)} alt="#" className={'product-card__image'} />
      <h1 className={'product-card__title'}>{title}</h1>
      <p className={'product-card__description'}>{description}</p>
      <p className={'product-card__price'}>{price.toLocaleString()} руб.</p>
      <div className={'product-card__menu'}>
        <img src={require(`../assets/icons/shopping-bag-line.svg`).default} alt=""/>
        <img src={require(`../assets/icons/heart_outline.svg`).default} alt=""/>
      </div>
    </div>
  )
}

export default ProductCard
