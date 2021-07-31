import {useSelector, useDispatch} from 'react-redux'
import {setToggleOrder} from '../../redux/actions/orderActions'
import CloseIcon from '@material-ui/icons/Close'

const Order = () => {
    const showOrder = useSelector(state => state.showOrder.showOrder)
    const order = useSelector(state => state.order.order)
    const dispatch = useDispatch()

    return (


        // <div className='order'>
        <>
            <div className={showOrder ? 'backgroundOverlay open' : 'backgroundOverlay'}></div>
            <div className={showOrder ? 'order orderOpen' : 'order'}>
                <CloseIcon onClick={() => dispatch(setToggleOrder(showOrder))} />

                {
                    order.length === 0 ?
                    <div>Your order is empty.</div>
                    :
                    <div>Not empty.</div>
                }
            </div>
        </>

    )
}

export default Order
