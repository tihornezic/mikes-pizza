import {Link, useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {useState, useEffect} from 'react'
import {useAuth} from '../../auth/authContext'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import {getOrderTotal} from '../../redux/reducers/orderReducer'
import {getOrderQuantity} from '../../redux/reducers/orderReducer'
import {annulOrder} from '../../redux/actions/orderActions'
import {setToggleOrder} from '../../redux/actions/orderActions'
import {db} from '../../firebase'
import axios from '../../axios'
import OrderItem from '../utils/OrderItem'
import pizzaLogoGreenSmall from '../../img/pizzaLogoGreenSmall.svg'
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined'
import pizzaMaster from '../../img/pizzaMaster.svg'

const Payment = () => {
    const history = useHistory()

    const order = useSelector(state => state.order.order)
    const showOrder = useSelector(state => state.showOrder.showOrder)
    const dispatch = useDispatch()
    const {currentUser} = useAuth()

    const [totalOrder, setTotalOrder] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)

    const stripe = useStripe()
    const elements = useElements()

    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState('')
    const [error, setError] = useState('')
    const [disabled, setDisabled] = useState(true)

    const [clientSecret, setClientSecret] = useState(true)


    const handleSubmit = async (e) => {
        e.preventDefault()

        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
            // paymentIntent = payment confirmation
        }).then(({paymentIntent}) => {

            db
                .collection('users')
                .doc(currentUser?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    order: order,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            dispatch(annulOrder())
            dispatch(setToggleOrder(showOrder))

            history.replace('/recent-orders')
        })
    }

    const handleChange = (e) => {
        setDisabled(e.empty)
        setError(e.error ? e.error.message : '')
    }

    useEffect(() => {
        setTotalQuantity(getOrderQuantity(order))
        setTotalOrder(getOrderTotal(order))
    }, [order])


    useEffect(() => {
        // generate special stripe secret which allows to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getOrderTotal(order) * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }


        getClientSecret()
    }, [order])

    // console.log('the secret is', clientSecret)

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
                            <h2>Delivery Information</h2>
                            <p>{currentUser.email}</p>
                            <p>123 React Lane</p>
                            <p>Los Angeles, CA</p>
                        </div>

                        <div className='orderContent'>
                            <h2>
                                <span style={{fontWeight: '700'}}>{totalQuantity}</span> Mike's pizzas
                            </h2>

                            {order.map((item, index) => (
                                <OrderItem key={index} item={item} />
                            ))}
                        </div>
                    </div>

                    <div className='right'>
                        <div className='summaryCard'>
                            <div className='headingRow'>
                                <h2>Summary</h2>
                                <img src={pizzaMaster} alt='Pizza eating' />
                            </div>

                            <div className='orderInfos'>
                                <div className='infoRow'>
                                    <span>Pizzas</span>
                                    <span>${totalOrder.toFixed(2)}</span>
                                </div>

                                <div className='infoRow'>
                                    <span>Delivery</span>
                                    <span>FREE</span>
                                </div>

                                <div className='infoRow'>
                                    <span className='total'>TOTAL</span>
                                    <span className='total'>${totalOrder.toFixed(2)}</span>
                                </div>

                                <div className='addressDetails'>
                                    <h2>Delivery Information</h2>
                                    <p>{currentUser.email}</p>
                                    <p>123 React Lane</p>
                                    <p>Los Angeles, CA</p>
                                </div>


                                <div className='paymentDetails'>
                                    <h2>Payment Method</h2>

                                    <form onSubmit={handleSubmit}>
                                        <CardElement onChange={handleChange} />

                                        <button
                                            disabled={processing || disabled || succeeded}
                                            // className='button buttonSecondary confirmOrderButton'
                                            className={processing || disabled || succeeded ?
                                                'button confirmOrderButton buttonDisabled' :
                                                'button buttonSecondary confirmOrderButton'
                                            }
                                        >
                                            <span>{processing ? <p>Processing</p> : 'Confirm the Order'}</span>
                                        </button>
                                    </form>

                                    {error && <div>{error}</div>}
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Payment
