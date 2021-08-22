import {Link, useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {useAuth} from '../../auth/authContext'
import Hamburger from '../layout/Hamburger'
import SlideMenu from '../layout/SlideMenu'
import RecentOrder from '../utils/RecentOrder'
import pizzaLogoDarkSmall2x from '../../img/pizzaLogoDarkSmall2x.png'
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
        window.scrollTo({top: 0, behavior: 'smooth'})
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        setMessage(location.state?.message)
    }, [location])

    return (
        <>
            <div className='recentOrders'>
                <div className='container'>
                    <Link to='/'>
                        <img className='logo' src={pizzaLogoDarkSmall2x} alt='Pizza logo white' />
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

                </div>
            </div>

            <Hamburger />
            <SlideMenu />
        </>
    )
}

export default RecentOrders
