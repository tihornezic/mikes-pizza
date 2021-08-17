import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {useAuth} from '../../auth/authContext'
import {db} from '../../firebase'
import RecentOrder from '../utils/RecentOrder'
import pizzaLogoDarkSmall from '../../img/pizzaLogoDarkSmall.svg'

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

    useEffect(() => {
        console.log(orders)
        console.log(orders[0]?.data.created)

    }, [orders])

    return (
        <div className='recentOrders'>
            <div className='container'>
                <Link to='/'>
                    <img className='logo' src={pizzaLogoDarkSmall} alt='Pizza logo white' />
                </Link>

                <div className='recentOrdersContainer'>
                    <h1>Recent Orders</h1>
                    <h2 style={{marginBottom: '70px'}}>{currentUser.email}</h2>

                    {orders.map(item => (
                        // <div key={index} style={{marginBottom: '40px'}}>
                        //     {/* <p>{date}</p> */}
                        //     <p>{generateTimeStamp(item)}</p>
                        //     <p>{item.id}</p>
                        //     <p>{item.data.orderAddress.city}</p>
                        //     <p>{item.data.orderAddress.address}</p>
                        //     <p>${(item.data.amount / 100).toFixed(2)}</p>
                        //     {item.data.order.map((order) => (
                        //         <>
                        //             <p>{order.name}</p>
                        //             <p>{order.quantity}</p>
                        //             <p>{order.extras}</p>
                        //         </>
                        //     ))}
                        // </div>

                        <RecentOrder key={item.id} item={item} />
                    ))}
                </div>


            </div>
        </div>
    )
}

export default RecentOrders
