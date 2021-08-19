import {Link, useHistory, useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {useAuth} from '../../auth/authContext'
import RecentOrder from '../utils/RecentOrder'
import pizzaLogoDarkSmall from '../../img/pizzaLogoDarkSmall.svg'
import pizzaEatingTogether from '../../img/pizzaEatingTogether.svg'
import CloseIcon from '@material-ui/icons/Close'

const RecentOrders = () => {
    const {currentUser, getPayment} = useAuth()
    const [orders, setOrders] = useState([])

    const [message, setMessage] = useState('')
    const [showMessage, setShowMessage] = useState(true)

    const location = useLocation()

    useEffect(() => {
        getPayment(setOrders)
    }, [])

    useEffect(() => {
        setMessage(location.state?.message)
    }, [location])

    return (
        <div className='recentOrders'>
            <div className='container'>
                <Link to='/'>
                    <img className='logo' src={pizzaLogoDarkSmall} alt='Pizza logo white' />
                </Link>

                {message && showMessage ?
                    <div className='message'>
                        {message}
                        <CloseIcon onClick={() => {setShowMessage(false); setMessage('')}} />
                    </div>
                    :
                    null
                }

                <div className='recentOrdersContainer'>
                    <div className='left'>
                        <h1>Recent Orders</h1>
                        <h2 style={{marginBottom: '50px'}}>{currentUser.email}</h2>

                        {orders.length >= 1 ?
                            orders.map(item => (
                                <RecentOrder key={item.id} item={item} />
                            ))
                            :
                            <div className='emptyOrders'>
                                <p>You haven't ordered any pizza! You don't know what you are missing :)</p>
                            </div>
                        }
                    </div>

                    <div className='right'>
                        <img src={pizzaEatingTogether} alt='Pizza eating together' />
                    </div>
                </div>

                <div>
                    <h1>Footer</h1>
                </div>

            </div>
        </div>
    )
}

export default RecentOrders
