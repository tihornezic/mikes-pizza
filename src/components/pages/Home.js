import Hero from '../utils/Hero'
import Header from '../layout/Header'
import Menu from '../utils/Menu'
import Quote from '../utils/Quote'
import Badges from '../utils/Badges'
import Order from '../utils/Order'
import CustomizeOrderModal from '../utils/CustomizeOrderModal'
import BackgroundOverlay from '../utils/BackgroundOverlay';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setToggleOrder} from '../../redux/actions/orderActions'

const Home = () => {
    const showOrder = useSelector(state => state.showOrder.showOrder)
    const order = useSelector(state => state.order.order)
    const dispatch = useDispatch()

    const [shake, setShake] = useState(false)

    useEffect(() => {
        console.log(order)
        setShake(true)
    }, [order])

    const toggleBodyOverflowHidden = () => {
        document.body.classList.toggle('overflow')
    }

    return (
        <div className='home'>
            <BackgroundOverlay />
            <Header />
            <Order />
            <Hero />

            {/* basket icon */}
            <div className={shake ? 'basket shake' : 'basket'} onClick={() => dispatch(setToggleOrder(showOrder))}
                onAnimationEnd={() => setShake(false)}>

                <ShoppingBasketIcon className='basketIcon' />

                {order.length >= 1 ?
                    <p className='orderItems'>{order.length}</p>
                    :
                    null
                }
            </div>

            <CustomizeOrderModal />

            <Menu />
            <Quote />
            <Badges />

        </div>
    )
}

export default Home
