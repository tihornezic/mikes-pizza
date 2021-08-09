import EditIcon from '@material-ui/icons/Edit'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'

const OrderItem = ({item}) => {
    return (
        <div className='orderItem'>
            <div className='row'>
                <div className='quantityName'>
                    <span className='quantity'>{item.quantity}x</span>
                    <span>{item.name}</span>
                </div>
                <div className='priceAndIcons'>
                    <span>${item.price.toFixed(2)}</span>
                    <EditIcon className='edit' />
                    <DeleteOutlineIcon className='delete' />
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
