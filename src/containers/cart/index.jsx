import React from 'react'
import { AppContext } from '../../context'

const Cart = () => {
  const miContext = React.useContext(AppContext);

  console.log(miContext)
  return (
    <div>Cart</div>
  )
}

export default Cart