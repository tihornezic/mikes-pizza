import {useSelector, useDispatch} from 'react-redux'
import {setToggleSlideMenu} from '../../redux/actions/slideMenuActions'
import {setToggleHamburger} from '../../redux/actions/HamburgerActions'

const Hamburger = () => {
    const showHamburger = useSelector(state => state.showHamburger.showHamburger)
    const showSlideMenu = useSelector(state => state.showSlideMenu.showSlideMenu)
    const dispatch = useDispatch()

    return (
        <div className='hamburger' onClick={() => {dispatch(setToggleHamburger(showHamburger)); dispatch(setToggleSlideMenu(showSlideMenu))}}>
            <div className={showHamburger ? 'open' : 'close'}></div>
            <div className={showHamburger ? 'open' : 'close'}></div>
            <div className={showHamburger ? 'open' : 'close'}></div>
        </div>
    )
}

export default Hamburger
