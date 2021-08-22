import {useSelector} from 'react-redux'

const BackgroundOverlay = () => {
    const showCustomizeOrderModal = useSelector(state => state.showCustomizeOrderModal.showCustomizeOrderModal)
    const showOrder = useSelector(state => state.showOrder.showOrder)
    const authModal = useSelector(state => state.showAuthModal.showAuthModal)
    const addressModal = useSelector(state => state.showAddressModal.showAddressModal)

    return (
        <div className={showCustomizeOrderModal || showOrder || authModal || addressModal ? 'backgroundOverlay open' : 'backgroundOverlay'}></div>
    )
}

export default BackgroundOverlay
