import pizzaLogoDark from '../../img/pizzaLogoDark.svg'

const Quote = () => {
    return (
        <div className='quote'>
            <img src={pizzaLogoDark} alt='Pizza logo dark' width={'650px'} />
            <p>"Always crispy crust & fresh ingredients. The tastiest pizza in town!"</p>
        </div>
    )
}

export default Quote
