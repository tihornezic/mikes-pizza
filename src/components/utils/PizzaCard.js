

const PizzaCard = ({pizza}) => {
    return (
        <div className='pizzaCard'>
            <div className='card'>
                <div className='darkGreen'></div>
                <img src={pizza.image} alt={pizza.name} width='290px' />
                <h3>{pizza.name}</h3>
                <p>{pizza.description}</p>
            </div>
        </div>
    )
}

export default PizzaCard
