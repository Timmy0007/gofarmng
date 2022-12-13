import React from 'react'
import { useDispatch } from 'react-redux'

    import { deleteItem, decItemAmount, incItemAmount,} from '../../../src/redux/features/cartSlice';


    const CartItem = ({id, name, price, amount, img}) => {

        const decAmmount =() => {
            if (amount === 1) {
                dispatch(deleteItem(id));
            } else {
                dispatch(decItemAmount(id));
            }
        };

        const incAmount = () => {
            dispatch(incItemAmount(id))
        };



        return (
            <article>
                
                <table>
                    <thead>Cart</thead>
                    <tr>

                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                    </tr>
                    <tr>
                        <div className='product-details'>
                            <img src="" alt="" />
                            <div className='item-info'>
                                <h3>Fresh Farm apple</h3>
                                <p>#3000/pcs</p>
                            </div>

                        </div>

                        <div>
                            <ProductButton 
                            amount={amount}
                            decAmmount={decAmmount}
                            incAmount={incAmount}
                            />
                        </div>
                    </tr>

                </table>
            </article>

    )}

    export default CartItem