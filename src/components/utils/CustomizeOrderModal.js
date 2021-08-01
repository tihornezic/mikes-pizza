import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import CloseIcon from '@material-ui/icons/Close'
import {setToggleCustomizeOrderModal} from '../../redux/actions/orderActions'
import {addPizzaToOrder} from '../../redux/actions/orderActions'
// import Sunburst from '../../img/Sunburst1.svg'

const CustomizeOrderModal = () => {
    const showCustomizeOrderModal = useSelector(state => state.showCustomizeOrderModal.showCustomizeOrderModal)
    const pizza = useSelector(state => state.pizza.pizza)

    const dispatch = useDispatch()

    return (
        <>
            {/* <div className={showCustomizeOrderModal ? 'backgroundOverlay open' : 'backgroundOverlay'}></div> */}
            <div className={showCustomizeOrderModal ? 'customizeOrderModal open' : 'customizeOrderModal'}>
                <CloseIcon onClick={() => dispatch(setToggleCustomizeOrderModal(showCustomizeOrderModal))} />

                <div className='contentRow'>
                    <div className='left'>
                        <h1>{pizza.name}</h1>
                        <h3>Pick One</h3>
                        <span>Required</span>

                    </div>

                    <div className='right'>
                        <div className='imageBox'>
                            <img className='pizza' src={pizza.image} alt={pizza.name} width={'275px'} />
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default CustomizeOrderModal
