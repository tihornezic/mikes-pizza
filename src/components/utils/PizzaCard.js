import {Link} from 'react-router-dom'
import AddCircleIcon from '@material-ui/icons/AddCircle'

const PizzaCard = ({pizza}) => {

    return (
        <Link to='/'>
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
