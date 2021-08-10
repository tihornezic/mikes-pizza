import {useSelector, useDispatch} from 'react-redux'

const BackgroundOverlay = () => {
    const showCustomizeOrderModal = useSelector(state => state.showCustomizeOrderModal.showCustomizeOrderModal)
    const showCustomizeOrderModalEdit = useSelector(state => state.showCustomizeOrderModal.showCustomizeOrderModalEdit)
    const showOrder = useSelector(state => state.showOrder.showOrder)

    return (
        <div className={showCustomizeOrderModal || showOrder || showCustomizeOrderModalEdit ? 'backgroundOverlay open' : 'backgroundOverlay'}></div>
    )
}

export default BackgroundOverlay
