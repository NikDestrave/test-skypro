import Input from "../components/Input";

const BasketForm = ({totalAmount}) => {
  const submitOrder = (e) => {
    console.log(e)
    e.preventDefault();
    alert('Заказ оформлен!')
  }

  return (
    <form className={'basket-form'} onSubmit={submitOrder}>
      <h2>Оформление заказа</h2>
      <Input placeholder={'Имя Фамилия'} />
      <Input placeholder={'+ 7 904 000 80 80'} />
      <Input placeholder={'Адрес доставки'} />
      <p className={'total-price'}>Итого: <b>{totalAmount.toLocaleString()} руб.</b></p>
      <button className={'button'} type={'submit'}>Оформить заказ</button>
    </form>
  )
};

export default BasketForm;