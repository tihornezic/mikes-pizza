import {Link, useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {useState, useEffect} from 'react'
import {useAuth} from '../../auth/authContext'
import OrderItem from '../utils/OrderItem'
import pizzaLogoGreenSmall from '../../img/pizzaLogoGreenSmall.svg'
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined'

const Payment = () => {
    const history = useHistory()

    const order = useSelector(state => state.order.order)
    const {currentUser} = useAuth()

    const [orderPrices, setOrderPrices] = useState(0)
    const [totalOrder, setTotalOrder] = useState(0)

    const [quantities, setQuentities] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)


    useEffect(() => {
        // set all items' prices
        setOrderPrices(order.map((item) => (
            item.price
        )))

        // set all items' quantities
        setQuentities(order.map((item) => (
            item.quantity
        )))
    }, [])

    useEffect(() => {
        if (orderPrices && quantities) {
            setTotalOrder(orderPrices.reduce((a, b) => a + b, 0))
            setTotalQuantity(quantities.reduce((a, b) => a + b, 0))
        } else {
            setTotalOrder(0)
            setTotalQuantity(0)
        }
    }, [orderPrices])

    return (
        <div className='payment'>
            <div className='container'>
                <Link to='/'>
                    <img className='logo' src={pizzaLogoGreenSmall} alt='Pizza logo green' />
                </Link>
            </div>

            <div className='paymentContainer'>
                <div className='heading'>
                    <ArrowBackOutlinedIcon onClick={() => history.goBack()} />
                    <h1>Order Summary</h1>
                </div>

                <div className='mainRow'>
                    <div className='left'>
                        <div className='address'>
                            <h2 style={{marginBottom: '10px'}}>Delivery Information</h2>
                            <p>{currentUser.email}</p>
                            <p>123 React Lane</p>
                            <p>Los Angeles, CA</p>
                        </div>

                        <div className='orderContent'>
                            <h2 style={{marginBottom: '10px'}}>
                                <span style={{fontWeight: '700'}}>{totalQuantity}</span> Mike's pizzas
                        </h2>

                            {order.map((item, index) => (
                                <OrderItem key={index} item={item} />
                            ))}
                        </div>
                    </div>

                    <div className='right'>
                        <div className='summaryCard'>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Payment
