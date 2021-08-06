import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {setToggleCustomizeOrderModal} from '../../redux/actions/orderActions'
import {addPizzaToOrder} from '../../redux/actions/orderActions'
import {createTheme} from '@material-ui/core/styles'
import {ThemeProvider} from '@material-ui/core/styles'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CloseIcon from '@material-ui/icons/Close'
import Checkbox from '@material-ui/core/Checkbox'

const CustomizeOrderModal = () => {
    const showCustomizeOrderModal = useSelector(state => state.showCustomizeOrderModal.showCustomizeOrderModal)
    const pizza = useSelector(state => state.pizza.pizza)

    // extras prices
    const [extrasArray, setExtrasArray] = useState([])
    // extras items
    const [extrasItemsArray, setExtrasItemsArray] = useState([])
    // sum of all extras array
    const [allExtrasTotal, setAllExtrasTotal] = useState(0)

    const [pizzaSize, setPizzaSize] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [totalOrderAmount, setTotalOrderAmount] = useState(0)

    const [orderObject, setOrderObject] = useState({})

    const dispatch = useDispatch()

    const theme = createTheme({
        typography: {
            fontFamily: 'Neuton, sans-serif',
            fontWeightRegular: 600,
        },
        palette: {
            primary: {
                light: '#fff',
                main: '#C57B57',
                contrastText: '#fff',
            },
            text: {
                primary: '#e2e8f0',
            },
            action: {
                hover: '#1E2D2F'
            }
        }
    })

    const extras = [
        {item: 'Cheese', price: 0.99}, {item: 'Pepperoni', price: 0.89}, {item: 'Sausage', price: 1.25},
        {item: 'Peppers', price: 0.99}, {item: 'Pineapple', price: 1.51}, {item: 'Ham', price: 1},
        {item: 'Spinach', price: 1.25}, {item: 'Artichokes', price: 1.12}, {item: 'Mushrooms', price: 0.99},
        {item: 'Anchovies', price: 1.99}
    ]

    const toggleCheckbox = (e, item) => {
        // add
        if (e.target.checked) {
            setExtrasArray(prev => [...prev, e.target.value])
            addExtra(parseFloat(e.target.value))
            setExtrasItemsArray(prev => [...prev, item])
        // remove
        } else {
            setExtrasArray(extrasArray.filter(extra => extra !== e.target.value))
            subtractExtra(parseFloat(e.target.value))
            setExtrasItemsArray(extrasItemsArray.filter(extra => extra !== item))

        }
    }

    const togglePizzaSizeChoice = (propPizzaSize, allExtrasTotal) => {
        // if it is already active/clicked
        if (pizzaSize === propPizzaSize) {
            setPizzaSize(false)
            setTotalOrderAmount(propPizzaSize + allExtrasTotal)
        } else {
            setPizzaSize(propPizzaSize)
            setTotalOrderAmount(propPizzaSize + allExtrasTotal)
        }
    }

    const addExtra = (extra) => {
        // setTotalOrderAmount(prev => parseFloat(prev) + parseFloat(extra))
        setTotalOrderAmount(prev => +(prev + extra).toFixed(2))
    }

    const subtractExtra = (extra) => {
        // setTotalOrderAmount(prev => parseFloat(prev) - parseFloat(extra))
        setTotalOrderAmount(prev => +(prev - extra).toFixed(2))
    }

    const resetPizzaSizeAndQuantity = () => {
        setPizzaSize(null)
        setQuantity(1)
    }

    const preventQuantityToZero = (quantity) => {
        if (quantity <= 1) {
            setQuantity(1)
        }
    }

    const createOrderObject = () => {
        setOrderObject({
            extras: extrasItemsArray,
            quantity: quantity,
            // amount: totalOrderAmount * quantity,
            price: +(totalOrderAmount.toFixed(2) * quantity.toFixed(2)).toFixed(2),
        })
    }

    useEffect(() => {
        // get extrasArray, parse to numbers and add them, set that value to 
        // allExtrasTotal which is added to 
        let extrasNumbersArray = extrasArray.map(number => Number(number))
        setAllExtrasTotal(extrasNumbersArray.reduce((a, b) => a + b, 0))
    }, [extrasArray])


    // ****
    // dispatch orderObject to redux store order variable
    useEffect(() => {
        // do not dispatch empty object, only dispatch when object is populated
        if(Object.keys(orderObject).length !== 0) {
            dispatch(addPizzaToOrder(orderObject))
        }
    }, [orderObject])

    return (
        <div className={showCustomizeOrderModal ? 'customizeOrderModal open' : 'customizeOrderModal'}>
            <CloseIcon className='close'
                onClick={() => {
                    dispatch(setToggleCustomizeOrderModal(showCustomizeOrderModal))
                    resetPizzaSizeAndQuantity()
                }} />

            <div className='contentRow'>
                <div className='left'>
                    <h1>{pizza.name}</h1>
                    <h3>Pick One</h3>
                    <span className='required'>Required</span>

                    <div className='sizeOptions'>
                        <div className={pizzaSize === pizza.prices?.small ? 'option active' : 'option'}
                            onClick={() => togglePizzaSizeChoice(pizza.prices?.small, allExtrasTotal)}
                        >
                            <div className='labelPriceRow'>
                                <span className='label'>Small</span>
                                <span className='price'>${pizza.prices?.small.toFixed(2)}</span>
                            </div>
                            <AddCircleIcon className='add' />
                        </div>

                        <div className={pizzaSize === pizza.prices?.medium ? 'option active' : 'option'}
                            onClick={() => togglePizzaSizeChoice(pizza.prices?.medium, allExtrasTotal)}
                        >
                            <div className='labelPriceRow'>
                                <span className='label'>Medium</span>
                                <span className='price'>${pizza.prices?.medium.toFixed(2)}</span>
                            </div>
                            <AddCircleIcon className='add' />
                        </div>

                        <div className={pizzaSize === pizza.prices?.large ? 'option active' : 'option'}
                            onClick={() => togglePizzaSizeChoice(pizza.prices?.large, allExtrasTotal)}
                        >
                            <div className='labelPriceRow'>
                                <span className='label'>Large</span>
                                <span className='price'>${pizza.prices?.large.toFixed(2)}</span>
                            </div>
                            <AddCircleIcon className='add' />
                        </div>
                    </div>

                    <div className='quantity'>

                        <div className='quantityController'>
                            <h1>Quantity</h1>
                            <div className={pizzaSize ? 'buttons active' : 'buttons'}>
                                <RemoveCircleOutlineIcon onClick={() => {setQuantity(prev => prev - 1); preventQuantityToZero(quantity)}} />
                                <span>{quantity}</span>
                                <AddCircleOutlineIcon onClick={() => setQuantity(prev => prev + 1)} />
                            </div>
                        </div>
                    </div>

                    <div className='extras'>
                        <h1>Extras</h1>

                        {/* extras checkboxes grid */}
                        <ThemeProvider theme={theme}>
                            <div className='grid'>
                                {extras.map((extra) => (
                                    <FormControlLabel
                                        key={extra.item}
                                        disabled={pizzaSize ? false : true}
                                        control={
                                            <Checkbox
                                                color='primary'
                                                value={extra.price}
                                                onChange={(e) => toggleCheckbox(e, extra.item)}
                                            />
                                        }
                                        label=
                                        {
                                            <span style={pizzaSize ? {fontSize: '1.155rem', color: '#494949'} : {fontSize: '1.155rem', color: '#bbbbbb'}}>
                                                {extra.item}&nbsp;
                                                <span style={pizzaSize ? {color: '#366961'} : {color: '#c7c7c7'}}>+${extra.price}</span>
                                            </span>
                                        }
                                    />
                                ))}
                            </div>
                        </ThemeProvider>
                    </div>

                </div>

                <div className='right'>
                    <div className='imageBox'>
                        <img className='pizza' src={pizza.image} alt={pizza.name} width={'275px'} />
                    </div>

                    <div className='ingredients'>
                        <h2>Ingredients</h2>

                        {pizza.ingredients?.map((ingredient, index) => (
                            <p key={index}>{ingredient}</p>
                        ))}
                    </div>

                    <div className='extras'>
                        <h2>Extras</h2>

                        {extrasItemsArray.length === 0 ?
                            <span>No extras</span>
                            :
                            extrasItemsArray.map((extra, index) => (
                                <span key={index}>{(index ? ', ' : '') + extra[0].toLowerCase() + extra.substr(1)}</span>
                            ))

                        }
                    </div>

                    <button className={pizzaSize ? 'button buttonSecondary' : 'button buttonDisabled'} onClick={() => {
                        createOrderObject()
                        dispatch(setToggleCustomizeOrderModal(showCustomizeOrderModal))
                        resetPizzaSizeAndQuantity()
                    }}>
                        Add to Order&nbsp;
                        {
                            // totalOrderAmount !== 0
                            pizzaSize
                                ?
                                // <span>${totalOrderAmount.toFixed(2)}</span>
                                <span>${(totalOrderAmount.toFixed(2) * quantity.toFixed(2)).toFixed(2)}</span>
                                : null
                        }
                    </button>

                </div>
            </div>

        </div>

    )
}

export default CustomizeOrderModal
