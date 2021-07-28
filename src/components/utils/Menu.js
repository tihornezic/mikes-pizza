import PizzaCard from '../utils/PizzaCard'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getPizzas} from '../../redux/actions/pizzasActions'

const Menu = () => {
    const pizzas = useSelector(state => state.pizzas.pizzas)
    const dispatch = useDispatch()

    
    useEffect(() => {
        dispatch(getPizzas())
    }, [])

    return (
        <div className='container menu'>
            <h2>Our famous & beloved pizzas</h2>

            <div className='grid'>
                {pizzas.map((pizza) => (
                    <PizzaCard key={pizza.id} pizza={pizza} />
                ))}
            </div>
        </div>
    )
}

export default Menu
