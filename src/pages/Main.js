import {useState} from 'react'
import ProductCard from '../views/ProductCard'
import Select from '../components/Select'

const products = [
  {
    id: 0,
    image: '1.png',
    title: 'Кровать TATRAN',
    description: 'Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.',
    price: 120000,
  },
  {
    id: 1,
    image: '2.png',
    title: 'Кресло VILORA',
    description: 'Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань.',
    price: 21000,
  },
  {
    id: 2,
    image: '3.png',
    title: 'Стол MENU',
    description: 'Европейский дуб - отличается особой прочностью и стабильностью.',
    price: 34000,
  },
  {
    id: 3,
    image: '4.png',
    title: 'Диван ASKESTA',
    description: 'Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать',
    price: 68000,
  },
  {
    id: 4,
    image: '5.png',
    title: 'Кресло LUNAR',
    description: 'Прекрасно переносит солнечные лучи, перепады влажности и любые осадки',
    price: 40000,
  },
  {
    id: 5,
    image: '6.png',
    title: 'Шкаф Nastan',
    description: 'Мебель может быть оснащена разнообразными системами подсветки.',
    price: 80000,
  },
]

const selectOptions = [
  {
    title: 'Порядок: сперва дешевле',
    value: 'asc',
  },
  {
    title: 'Порядок: сперва дороже',
    value: 'desc',
  },
]

const Main = () => {
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
      id={product.id}
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
      <Select options={selectOptions} onChange={handleOptionClick} />
      <div className={'content-container__items'}>{listItems}</div>
    </section>
  )
}

export default Main
