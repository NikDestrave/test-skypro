import Input from "../components/Input";

const BasketForm = ({totalAmount}) => {
  return (
    <div className={'basket-form'}>
      <h2>Оформление заказа</h2>
      <Input placeholder={'Имя Фамилия'} />
      <Input placeholder={'+ 7 904 000 80 80'} />
      <Input placeholder={'Адрес доставки'} />
      <p className={'total-price'}>Итого: <b>{totalAmount.toLocaleString()} руб.</b></p>
      <button className={'basket-form__submit-button'}>Оформить заказ</button>
    </div>
  )
};

export default BasketForm;