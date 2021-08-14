import {useSelector, useDispatch} from 'react-redux'

const BackgroundOverlay = () => {
    const showCustomizeOrderModal = useSelector(state => state.showCustomizeOrderModal.showCustomizeOrderModal)
    const showOrder = useSelector(state => state.showOrder.showOrder)
    const authModal = useSelector(state => state.showAuthModal.showAuthModal)

    return (
        <div className={showCustomizeOrderModal || showOrder || authModal ? 'backgroundOverlay open' : 'backgroundOverlay'}></div>
    )
}

export default BackgroundOverlay
