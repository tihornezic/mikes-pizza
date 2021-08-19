

const CustomSpinner = ({isSpinning}) => {
    return (
        <div className={isSpinning ? 'customSpinner' : 'noDisplay'}>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default CustomSpinner
