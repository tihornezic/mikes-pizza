import {Link, useHistory} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setToggleOrder} from '../../redux/actions/orderActions'
import {setToggleAuthModal} from '../../redux/actions/authActions'
import {useAuth} from '../../auth/authContext'

const Header = () => {
    const order = useSelector(state => state.showOrder.showOrder)
    const authModal = useSelector(state => state.showAuthModal.showAuthModal)
    const dispatch = useDispatch()

    const history = useHistory()
    const {currentUser, logout} = useAuth()
    const [error, setError] = useState('')

    useEffect(() => {
        console.log(currentUser)
    }, [])

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push('/')
        } catch {
            setError('Failed to log out.')
            alert(error)
        }
    }

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
                    {currentUser ?
                        <div className='account'>
                            <p className='fakeLink'>Account</p>
                            <div className='dropdown'>
                                <div className='helloUser'>
                                    <p>
                                        Hello,
                                    </p>
                                    <span>{currentUser.email}</span>
                                </div>
                                <Link to='recent-orders'>Recent orders</Link>
                                <Link to='profile'>Profile</Link>
                                <Link to='/' onClick={handleLogout}>Log out</Link>
                            </div>
                        </div>
                        :
                        <Link to='/' onClick={() => dispatch(setToggleAuthModal(authModal))}>Sign in</Link>
                    }
                </li>
                <li>
                    <a id='not' href='#menu' className='button buttonPrimary'>See Menu</a>
                </li>
            </ul>
        </div>
    )
}

export default Header
