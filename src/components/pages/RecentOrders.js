import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {useAuth} from '../../auth/authContext'
import RecentOrder from '../utils/RecentOrder'
import pizzaLogoDarkSmall from '../../img/pizzaLogoDarkSmall.svg'
import pizzaEatingTogether from '../../img/pizzaEatingTogether.svg'

const RecentOrders = () => {
    const {currentUser, getPayment} = useAuth()
    const [orders, setOrders] = useState([])

    useEffect(() => {
        getPayment(setOrders)
    }, [])

    return (
        <div className='recentOrders'>
            <div className='container'>
                <Link to='/'>
                    <img className='logo' src={pizzaLogoDarkSmall} alt='Pizza logo white' />
                </Link>

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
