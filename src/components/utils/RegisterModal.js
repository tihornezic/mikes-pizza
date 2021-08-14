import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {useAuth} from '../../auth/authContext'
import {setToggleAuthModal} from '../../redux/actions/authActions'
import {useRef, useState, useEffect} from 'react'
import LoginModal from './LoginModal'
import Alert from '@material-ui/lab/Alert'
import CloseIcon from '@material-ui/icons/Close'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import FacebookIcon from '@material-ui/icons/Facebook'

const RegisterModal = () => {
    const authModal = useSelector(state => state.showAuthModal.showAuthModal)
    const dispatch = useDispatch()

    const [registerModal, setRegisterModal] = useState(true)
    const [loginModal, setLoginModal] = useState(false)

    const {signup, currentUser} = useAuth()

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
            await signup(emailRef.current.value, passwordRef.current.value)
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
        <div className={authModal ? 'registerLoginModal open' : 'registerLoginModal'}>
            {registerModal &&
                <>
                    <CloseIcon className='close' onClick={() => dispatch(setToggleAuthModal(authModal))} />

                    <div className='contentColumn'>
                        <h1>Register on Mike's Pizza</h1>

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

                            <button type='submit' className='button buttonPrimary formButton'>Sign Up</button>

                        </form>

                        <div className='needAnAccount'>
                            <p>Already have an account? <Link to='#' onClick={() => {setLoginModal(true); setRegisterModal(false)}}>Log in</Link></p>
                        </div>
                    </div>
                </>
            }

            {loginModal &&
                <LoginModal setLoginModal={setLoginModal} setRegisterModal={setRegisterModal} />
            }
        </div>
    )
}

export default RegisterModal
