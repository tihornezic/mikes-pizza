import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import CloseIcon from '@material-ui/icons/Close'
import {setToggleCustomizeOrderModal} from '../../redux/actions/orderActions'
import {addPizzaToOrder} from '../../redux/actions/orderActions'

const CustomizeOrderModal = () => {
    const showCustomizeOrderModal = useSelector(state => state.showCustomizeOrderModal.showCustomizeOrderModal)
    const pizza = useSelector(state => state.pizza.pizza)

    const dispatch = useDispatch()

    return (
        <>
            {/* <div className={showCustomizeOrderModal ? 'backgroundOverlay open' : 'backgroundOverlay'}></div> */}
            <div className={showCustomizeOrderModal ? 'customizeOrderModal open' : 'customizeOrderModal'}>
                <CloseIcon onClick={() => dispatch(setToggleCustomizeOrderModal(showCustomizeOrderModal))} />

               <div className='content'>

               </div>

            </div>
        </>
    )
}

export default CustomizeOrderModal
