import ProductCards from './ProductCards'
import {useState} from 'react'

const Content = ({products}) => {
  const [sortValue, setSortValue] = useState('asc')
  const sortAsc = (a, b) => {
    return a.price - b.price
  }
  const sortDesc = (a, b) => {
    return b.price - a.price
  }

  products.sort(sortValue === 'asc' ? sortAsc : sortDesc)

  const listItems = products.map(product => (
    <ProductCards
      key={product.id}
      title={product.title}
      description={product.description}
      image={product.image}
      price={product.price}
    />
  ))

  const handleOptionClick = e => {
    setSortValue(e)
  }

  return (
    <section className={'content-container'}>
      <select className={'content-container__sort-select'} onChange={e => handleOptionClick(e.target.value)}>
        <option value={'asc'}>Порядок: сперва дешевле</option>
        <option value={'desc'}>Порядок: сперва дороже</option>
      </select>
      <div className={'content-container__items'}>{listItems}</div>
    </section>
  )
}

export default Content
