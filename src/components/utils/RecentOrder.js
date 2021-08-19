import {getOrderQuantity} from '../../redux/reducers/orderReducer'
import {getOrderTotal} from '../../redux/reducers/orderReducer'

const RecentOrder = ({item}) => {

    const generateTimeStamp = (order) => {
        const timeStampDate = order.data.created
        const dateInMillis = timeStampDate * 1000

        return new Date(dateInMillis).toDateString() + ' at ' + new Date(dateInMillis).toLocaleTimeString()
    }

    return (
        <div className='recentOrder'>
            <h3>
                Order Info
                <span>({item.id})</span>
            </h3>

            <div className='infoGroup'>
                <p className='timestamp'>{generateTimeStamp(item)}</p>
            </div>

            <div className='infoGroup'>
                <p className='address'>{item.data.orderAddress.city}</p>
                <p className='address'>{item.data.orderAddress.address}</p>
            </div>

            <div className='infoGroup'>
                {item.data.order.map((order) => (
                    <div key={order.id} className='pizzaInfo'>

                        <div className='pizzaInfoRow'>
                            <p>{order.quantity}x</p>
                            <p>{order.name}</p>
                            <p>&nbsp;({order.size})</p>
                        </div>

                        <div className='pizzaOrderInfo'>
                            <div className='infoRow'>
                                <p className='label'>Unit price: </p>
                                <p className='price'>&nbsp;${(order.sizePrice).toFixed(2)}</p>
                            </div>

                            <div className='infoRow'>
                                <p className='label'>Extras: </p>
                                {order.extras.length !== 0 ?
                                    <p className='extras'>&nbsp;{order.extras}</p>
                                    :
                                    <p className='dash'>-</p>
                                }
                            </div>

                            <div className='infoRow'>
                                <p className='label'>Price: </p>
                                <p className='price total'>&nbsp;${(order.price).toFixed(2)}</p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            <div className='infoGroup adjustedMargins'>
                <p className='totalQuantity'>Total {getOrderQuantity(item.data.order)} pizzas</p>
            </div>

            <div className='infoGroup adjustedMargins'>
                <p className='totalPrice'>${(getOrderTotal(item.data.order)).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default RecentOrder
