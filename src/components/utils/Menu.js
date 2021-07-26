import PizzaCard from '../utils/PizzaCard'
import {useState, useEffect} from 'react'
import {
    fetchPizzas
} from '../../service/pizzas'

const Menu = () => {
    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            setPizzas(await fetchPizzas())
        }

        fetchApi()
    }, [])

    // console.log(pizzas)

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
