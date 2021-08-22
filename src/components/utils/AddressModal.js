import {useSelector, useDispatch} from 'react-redux'
import {setToggleAddressModal} from '../../redux/actions/orderActions'
import {setOrderAddress} from '../../redux/actions/orderActions'
import {useRef, useState} from 'react'
import {useHistory} from 'react-router-dom'
import deliveryAddress from '../../img/deliveryAddress.svg'
import CloseIcon from '@material-ui/icons/Close'
import LocationCityOutlinedIcon from '@material-ui/icons/LocationCityOutlined'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'

const AddressModal = () => {
    const addressModal = useSelector(state => state.showAddressModal.showAddressModal)
    const dispatch = useDispatch()

    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')

    const cityRef = useRef()
    const addressRef = useRef()

    const [activeCity, setActiveCity] = useState(false)
    const [activeAddress, setActiveAddress] = useState(false)

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(setOrderAddress({
            city: cityRef.current.value,
            address: addressRef.current.value
        }))

        dispatch(setToggleAddressModal(addressModal))

        history.push('/payment')

        setCity('')
        setAddress('')
        setActiveCity(false)
        setActiveAddress(false)
    }

    return (
        <div className={addressModal ? 'addressModal open' : 'addressModal'}>
            <CloseIcon className='close' onClick={() => dispatch(setToggleAddressModal(addressModal))} />

            <h1>Enter a Delivery Address</h1>

            <div className='mainRow'>
                <form onSubmit={handleSubmit}>
                    <div className='inputGroup'>
                        <LocationCityOutlinedIcon />
                        <label className={activeCity ? 'active' : ''} htmlFor='city'>City</label>
                        <input className={activeCity ? 'active' : ''} type='text'
                            onFocus={() => setActiveCity(true)}
                            onBlur={city.length === 0 ? () => setActiveCity(false) : () => setActiveCity(true)}
                            ref={cityRef} required value={city} onChange={(e) => setCity(e.target.value)}
                        />
                    </div>

                    <div className='inputGroup'>
                        <LocationOnOutlinedIcon />
                        <label className={activeAddress ? 'active' : ''} htmlFor='city'>Address</label>
                        <input className={activeAddress ? 'active' : ''} type='text'
                            onFocus={() => setActiveAddress(true)}
                            onBlur={address.length === 0 ? () => setActiveAddress(false) : () => setActiveAddress(true)}
                            ref={addressRef} required value={address} onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>

                    <button type='submit' disabled={!city && !address} className={city && address ? 'button buttonSecondary' : 'button buttonDisabled'}>
                        Confirm Address
                    </button>
                </form>

                <img src={deliveryAddress} alt='Delivery address'></img>
            </div>

        </div>
    )
}

export default AddressModal
