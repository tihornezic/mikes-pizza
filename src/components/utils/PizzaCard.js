import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {setToggleCustomizeOrderModal} from '../../redux/actions/orderActions'
import {getPizza} from '../../redux/actions/pizzasActions'
import {addPizzaToOrder} from '../../redux/actions/orderActions'
import AddCircleIcon from '@material-ui/icons/AddCircle'

const PizzaCard = ({pizza}) => {
    const showCustomizeOrderModal = useSelector(state => state.showCustomizeOrderModal.showCustomizeOrderModal)
    const dispatch = useDispatch()

    return (
        <div className='pizzaCard' onClick={() => {dispatch(setToggleCustomizeOrderModal(showCustomizeOrderModal)); dispatch(getPizza(pizza))}}>
            <div className='top'>
                <img src={pizza.image} alt={pizza.name} width='235px' />
            </div>
            <h3>{pizza.name}</h3>

            <p className='price'>
                {pizza.prices.small} /&nbsp;
                    {pizza.prices.medium} /&nbsp;
                    {pizza.prices.large}
            </p>

            <p className='description'>{pizza.description}</p>

            <AddCircleIcon />
        </div>
    )
}

export default PizzaCard
