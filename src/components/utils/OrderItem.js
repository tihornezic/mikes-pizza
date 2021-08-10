import {useSelector, useDispatch} from 'react-redux'
import {removePizzaFromOrder} from '../../redux/actions/orderActions'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'

const OrderItem = ({item}) => {
    const dispatch = useDispatch()

    return (
        <div className='orderItem'>
            <div className='row'>
                <div className='quantityName'>
                    <span className='quantity'>{item.quantity}x</span>
                    <span>{item.name}</span>
                </div>
                <div className='priceAndIcons'>
                    <span>${item.price.toFixed(2)}</span>
                    {/* <EditIcon className='edit' onClick={() => {
                        // dispatch(setToggleCustomizeOrderModal(showCustomizeOrderModal));
                        // dispatch(getPizza(item))
                        dispatch(setToggleCustomizeOrderModalEdit(showCustomizeOrderModalEdit));
                        dispatch(setToggleOrder(showOrder));
                        dispatch(getPizzaForEdit(item))
                    }} /> */}
                    <DeleteOutlineIcon className='delete' onClick={() => dispatch(removePizzaFromOrder(item))} />
                </div>
            </div>

            <div className='row'>
                <span className='label'>Size: <span className='labelValue bold'>{item.size}</span></span>
            </div>

            <div className='row'>

                <span className='ingredients'>{item.ingredients}</span>
                {/* <AddCircleOutlineIcon className='plus' /> */}
            </div>

            <div className='row'>
                <span className='label'>Extras: <span className='labelValue'>{item.extras.length === 0 && <span>-</span>}{item.extras}</span></span>
            </div>

            <div className='marginBottom'>
            </div>
        </div>
    )
}

export default OrderItem
