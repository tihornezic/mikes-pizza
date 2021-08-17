import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {useAuth} from '../../auth/authContext'
import {db} from '../../firebase'
import RecentOrder from '../utils/RecentOrder'
import pizzaLogoDarkSmall from '../../img/pizzaLogoDarkSmall.svg'
import pizzaEatingTogether from '../../img/pizzaEatingTogether.svg'

const RecentOrders = () => {
    const {currentUser} = useAuth()
    const [orders, setOrders] = useState([])

    useEffect(() => {
        db
            .collection('users')
            .doc(currentUser.uid)
            .collection('orders')
            .orderBy('createdAt', 'desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
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

                        {orders.map(item => (
                            <RecentOrder key={item.id} item={item} />
                        ))}
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
