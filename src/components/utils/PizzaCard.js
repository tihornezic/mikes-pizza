import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {setToggleOrder} from '../../redux/actions/orderActions'
import {addPizzaToOrder} from '../../redux/actions/orderActions'
import AddCircleIcon from '@material-ui/icons/AddCircle'

const PizzaCard = ({pizza}) => {
    const order = useSelector(state => state.showOrder.order)
    const dispatch = useDispatch()

    return (
        <Link to='/' onClick={() => dispatch(addPizzaToOrder(pizza))}>
            {/* <Link to='/' onClick={() => dispatch(setToggleOrder(order))}> */}
            <div className='pizzaCard'>
                <div className='card'>
                    <div className='darkGreen'></div>
                    <img src={pizza.image} alt={pizza.name} width='290px' />
                    <h3>{pizza.name}</h3>

                    <p className='price'>
                        {pizza.prices.small} /&nbsp;
                        {pizza.prices.medium} /&nbsp;
                        {pizza.prices.large}
                    </p>

                    <p className='description'>{pizza.description}</p>

                    <AddCircleIcon />
                </div>
            </div>
        </Link>
    )
}

export default PizzaCard
