import {useSelector, useDispatch} from 'react-redux'
import {setToggleOrder} from '../../redux/actions/orderActions'
import pizzaSharing from '../../img/pizzaSharing.svg'
import CloseIcon from '@material-ui/icons/Close'

const Order = () => {
    const showOrder = useSelector(state => state.showOrder.showOrder)
    const order = useSelector(state => state.order.order)
    const dispatch = useDispatch()

    return (
        <div className={showOrder ? 'order orderOpen' : 'order'}>
            <CloseIcon onClick={() => dispatch(setToggleOrder(showOrder))} />

            {
                order.length === 0 ?
                    <div className='empty'>
                        <img src={pizzaSharing} alt='Pizza sharing' />
                        <p>You haven't put any pizza to your Order. When you do, you will see them here!</p>
                    </div>
                    :
                    <div className='notEmpty'>
                        {order.map((item) => (
                            <p>{item.name}</p>
                        ))}
                    </div>
            }
        </div>

    )
}

export default Order
