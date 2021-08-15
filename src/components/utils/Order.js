import {useSelector, useDispatch} from 'react-redux'
import {setToggleOrder} from '../../redux/actions/orderActions'
import {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {useAuth} from '../../auth/authContext'
import {setToggleAuthModal} from '../../redux/actions/authActions'
import OrderItem from './OrderItem'
import pizzaSharing from '../../img/pizzaSharing.svg'
import CloseIcon from '@material-ui/icons/Close'

const Order = () => {
    const showOrder = useSelector(state => state.showOrder.showOrder)
    const order = useSelector(state => state.order.order)
    const authModal = useSelector(state => state.showAuthModal.showAuthModal)
    const dispatch = useDispatch()

    const [orderPrices, setOrderPrices] = useState(0)
    const [totalOrder, setTotalOrder] = useState(0)

    const [quantities, setQuentities] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)

    const {currentUser} = useAuth()

    const history = useHistory()

    const toggleBodyOverflowHidden = () => {
        document.body.classList.toggle('overflow')
    }

    useEffect(() => {
        // set all items' prices
        setOrderPrices(order.map((item) => (
            item.price
        )))

        // set all items' quantities
        setQuentities(order.map((item) => (
            item.quantity
        )))
    }, [order])


    useEffect(() => {
        if (orderPrices && quantities) {
            setTotalOrder(orderPrices.reduce((a, b) => a + b, 0))
            setTotalQuantity(quantities.reduce((a, b) => a + b, 0))
        } else {
            setTotalOrder(0)
            setTotalQuantity(0)
        }
    }, [orderPrices])


    useEffect(() => {
        console.log(totalQuantity)
    }, [totalQuantity])

    return (
        <div className={showOrder ? 'order orderOpen' : 'order'}>
            <CloseIcon className='close' onClick={() => dispatch(setToggleOrder(showOrder))} />

            {
                order.length === 0 ?
                    <div className='empty'>
                        <img src={pizzaSharing} alt='Pizza sharing' />
                        <p>You haven't put any pizza to your Order. When you do, you will see them here!</p>
                    </div>
                    :
                    <div className='notEmpty'>
                        <div className='headerAndItems'>
                            <h2>Your Order</h2>
                            {order.map((item, index) => (
                                // <p key={index}>{item.name}</p>
                                <OrderItem key={index} item={item} />
                            ))}

                        </div>



                        <button className='button buttonSecondary orderButton'
                            onClick={() => {
                                if (currentUser) {
                                    history.push('/payment')
                                } else {
                                    dispatch(setToggleOrder(showOrder))
                                    dispatch(setToggleAuthModal(authModal))
                                }
                            }}
                        >Order {totalQuantity} for ${totalOrder.toFixed(2)}</button>

                    </div>
            }
        </div>

    )
}

export default Order
