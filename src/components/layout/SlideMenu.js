import {Link, useHistory} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {useAuth} from '../../auth/authContext'
import {setToggleAuthModal} from '../../redux/actions/authActions'
import {setToggleOrder} from '../../redux/actions/orderActions'
import {hideSlideMenu} from '../../redux/actions/slideMenuActions'
import {hideHamburger} from '../../redux/actions/HamburgerActions'
import {useSelector, useDispatch} from 'react-redux'
import {db} from '../../firebase'
import pizzaLogoDarkSmall from '../../img/pizzaLogoDarkSmall.svg'

const SlideMenu = ({slideMenu}) => {
    const showSlideMenu = useSelector(state => state.showSlideMenu.showSlideMenu)
    const order = useSelector(state => state.showOrder.showOrder)
    const authModal = useSelector(state => state.showAuthModal.showAuthModal)
    const dispatch = useDispatch()

    const history = useHistory()
    const {currentUser, logout} = useAuth()
    const [userInfo, setUserInfo] = useState([])
    const [error, setError] = useState('')

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

    useEffect(() => {
        if (currentUser) {
            const getUserInfo = async () => {
                const data = await db.collection('users').doc(currentUser.uid).collection('userInfo').doc(currentUser.uid).get()
                setUserInfo(data.data())
            }

            getUserInfo()
        } else {
            setUserInfo([])
        }
    }, [currentUser]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className={showSlideMenu ? 'slideMenu slideMenuOpen' : 'slideMenu'}>
            <ul>
                <li>
                    <Link to='/' onClick={() => {dispatch(hideSlideMenu(false)); dispatch(hideHamburger(false))}}>
                        <img className='logo' src={pizzaLogoDarkSmall} alt='Pizza logo white' />
                    </Link>
                </li>
                <li>
                    <Link to='/' onClick={() => {dispatch(hideSlideMenu(false)); dispatch(hideHamburger(false))}}>Home</Link>
                </li>
                <li>
                    <Link to='#' onClick={() => {
                        dispatch(setToggleOrder(order));
                        dispatch(hideSlideMenu(false));
                        dispatch(hideHamburger(false))
                    }}>Order</Link>
                </li>

                <li>
                    {currentUser ?
                        <div className='account'>
                            <p>
                                {userInfo ?
                                    <span>{userInfo.name}</span>
                                    :
                                    <span>{currentUser.displayName}</span>
                                }
                            </p>
                            <Link to='recent-orders' onClick={() => {dispatch(hideSlideMenu(false)); dispatch(hideHamburger(false))}}>Recent orders</Link>
                            <Link to='/' onClick={() => {handleLogout(); dispatch(hideHamburger(false))}}>Log out</Link>
                        </div>
                        :
                        <Link to='/' onClick={() => {
                            dispatch(setToggleAuthModal(authModal)); 
                            dispatch(hideSlideMenu(false));
                            dispatch(hideHamburger(false))
                        }}>Sign in</Link>
                    }
                </li>

            </ul>
        </div>
    )
}

export default SlideMenu
