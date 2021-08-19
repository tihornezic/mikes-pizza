import PizzaCard from '../utils/PizzaCard'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getPizzas} from '../../redux/actions/pizzasActions'
import CircularProgress from '@material-ui/core/CircularProgress'
import {createTheme, ThemeProvider} from '@material-ui/core/styles'
import blob from '../../img/blob.svg'

const Menu = () => {
    const theme = createTheme({
        palette: {
            primary: {
                light: '#C57B57',
                main: '#C57B57',
                dark: '#C57B57',
                contrastText: '#fff',
            },
        }
    })

    const pizzas = useSelector(state => state.pizzas.pizzas)
    const loading = useSelector(state => state.pizzas.loading)
    const error = useSelector((state) => state.pizzas.error)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getPizzas())
    }, [])

    return (
        <div className='container menu' id='menu'>
            <h2>Our famous & beloved pizzas</h2>
            <img className='blob' src={blob} alt='blob' />

            {loading &&
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{display: 'block'}}>
                        <ThemeProvider theme={theme}>
                            <CircularProgress thickness={4.5} size={30} />
                        </ThemeProvider>
                    </div>
                    <p style={{fontWeight: '700'}}>Preparing today's menu</p>
                </div>
            }

            <div className='grid'>
                {pizzas.length > 0 && pizzas.map((pizza) => (
                    <PizzaCard key={pizza.id} pizza={pizza} />
                ))}
            </div>

            {pizzas.length === 0 && !loading && <p>No pizzas available!</p>}
            {error && !loading && <p>{error}</p>}
            
        </div>
    )
}

export default Menu
