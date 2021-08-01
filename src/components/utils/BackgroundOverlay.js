import {useSelector, useDispatch} from 'react-redux'

const BackgroundOverlay = () => {
    const showCustomizeOrderModal = useSelector(state => state.showCustomizeOrderModal.showCustomizeOrderModal)
    const showOrder = useSelector(state => state.showOrder.showOrder)

    return (
        <div className={showCustomizeOrderModal || showOrder ? 'backgroundOverlay open' : 'backgroundOverlay'}></div>
    )
}

export default BackgroundOverlay
