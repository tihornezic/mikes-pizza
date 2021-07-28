import PizzaCard from '../utils/PizzaCard'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getPizzas} from '../../redux/actions/pizzasActions'
import blob from '../../img/blob.svg'

const Menu = () => {
    const pizzas = useSelector(state => state.pizzas.pizzas)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getPizzas())
    }, [])

    return (
        <div className='container menu' id='menu'>
            <h2>Our famous & beloved pizzas</h2>
            <img className='blob' src={blob} alt='blob' />

            <div className='grid'>
                {pizzas.map((pizza) => (
                    <PizzaCard key={pizza.id} pizza={pizza} />
                ))}
            </div>
        </div>
    )
}

export default Menu
