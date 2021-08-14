import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {useAuth} from '../../auth/authContext'
import {setToggleAuthModal} from '../../redux/actions/authActions'
import {useRef, useState, useEffect} from 'react'
import Alert from '@material-ui/lab/Alert'
import CloseIcon from '@material-ui/icons/Close'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import FacebookIcon from '@material-ui/icons/Facebook'

const LoginModal = ({setLoginModal, setRegisterModal}) => {
    const authModal = useSelector(state => state.showAuthModal.showAuthModal)
    const dispatch = useDispatch()

    const {login, currentUser} = useAuth()

    const [activeEmail, setActiveEmail] = useState(false)
    const [activePassword, setActivePassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const emailRef = useRef()
    const passwordRef = useRef()


    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            dispatch(setToggleAuthModal(authModal))
            setEmail('')
            setPassword('')

        } catch (error) {
            setError(error.message)
        }

        setLoading(false)

    }


    useEffect(() => {
        console.log(currentUser)
    }, [currentUser])


    return (
        <>
            <CloseIcon className='close' onClick={() => {dispatch(setToggleAuthModal(authModal)); setLoginModal(false); setRegisterModal(true)}} />

            <div className='contentColumn'>
                <h1>Login on Mike's Pizza</h1>

                <button className='button facebookButton'>
                    <FacebookIcon />
                    Facebook
                </button>

                <p className='or'>or</p>

                {error &&
                    <Alert variant='filled' severity='error' style={{margin: '25px 0', width: '80%', marginBottom: '70px'}}>
                        {error}
                    </Alert>
                }

                <form onSubmit={handleSubmit}>
                    <div className='inputGroup'>
                        <EmailOutlinedIcon />
                        <label className={activeEmail ? 'active' : ''} htmlFor='email'>Email</label>
                        <input className={activeEmail ? 'active' : ''} type='email'
                            onFocus={() => setActiveEmail(true)}
                            // do the onBlur only if the value is empty
                            onBlur={email.length === 0 ? () => setActiveEmail(false) : () => setActiveEmail(true)}
                            ref={emailRef} required value={email} onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className='inputGroup'>
                        <LockOutlinedIcon />
                        <label className={activePassword ? 'active' : ''} htmlFor='password'>Password</label>
                        <input className={activePassword ? 'active' : ''} type='password'
                            onFocus={() => setActivePassword(true)}
                            // do the onBlur only if the value is empty
                            onBlur={password.length === 0 ? () => setActivePassword(false) : () => setActivePassword(true)}
                            ref={passwordRef} required value={password} onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type='submit' className='button buttonPrimary formButton'>Log In</button>

                </form>

                <div className='needAnAccount'>
                    <p>Need an account? <Link to='#' onClick={() => {setLoginModal(false); setRegisterModal(true)}}>Sign up</Link></p>
                </div>
            </div>
        </>
    )
}

export default LoginModal
