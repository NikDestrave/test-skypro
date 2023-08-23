import ProductCard from './ProductCard'
import {useState} from 'react'
import Select from "../components/Select";

const selectOptions = [
  {
    title: 'Порядок: сперва дешевле',
    value: 'asc'
  },
  {
    title: 'Порядок: сперва дороже',
    value: 'desc'
  },
]

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
    <ProductCard
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
      <Select options={selectOptions} onChange={handleOptionClick}/>
      <div className={'content-container__items'}>{listItems}</div>
    </section>
  )
}

export default Content
