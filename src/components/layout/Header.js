import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {setToggleOrder} from '../../redux/actions/orderActions'

const Header = () => {
    const order = useSelector(state => state.showOrder.showOrder)
    const dispatch = useDispatch()
    
    return (
        <div className='header'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/' onClick={() => dispatch(setToggleOrder(order))}>Order</Link>
                </li>
                <li>
                    <Link to='/'>Account</Link>
                </li>
                <li>
                    <a href='#menu' className='button buttonPrimary'>See Menu</a>
                </li>
            </ul>
        </div>
    )
}

export default Header
