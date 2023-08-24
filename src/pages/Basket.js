import BasketList from '../views/BasketList'
import BasketForm from '../views/BasketForm'
import {useMemo, useState} from 'react'

const Basket = () => {
  const [basketElements, setBasketElements] = useState(JSON.parse(localStorage.getItem('basket')) || [])

  const calculationTotalAmount = useMemo(() => {
    if (basketElements.length > 0) {
      return basketElements.map(el => el.count * el.price).reduce((a, b) => a + b)
    } else {
      return 0
    }
  }, [basketElements])

  return (
    <div className={'basket'}>
      <BasketList
        elements={basketElements}
        onTotalUpdate={() => setBasketElements(JSON.parse(localStorage.getItem('basket')))}
      />
      <BasketForm totalAmount={calculationTotalAmount} />
    </div>
  )
}

export default Basket
