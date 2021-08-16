import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {useAuth} from '../../auth/authContext'
import {setToggleAuthModal} from '../../redux/actions/authActions'
import {useRef, useState, useEffect} from 'react'
import {db} from '../../firebase'
import {facebookProvider} from '../../auth/authContext'
import LoginModal from './LoginModal'
import Alert from '@material-ui/lab/Alert'
import CloseIcon from '@material-ui/icons/Close'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import FacebookIcon from '@material-ui/icons/Facebook'

const RegisterModal = () => {
    const authModal = useSelector(state => state.showAuthModal.showAuthModal)
    const dispatch = useDispatch()

    const [registerModal, setRegisterModal] = useState(true)
    const [loginModal, setLoginModal] = useState(false)

    const {signup, currentUser, facebookAuth} = useAuth()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()

    const [activeName, setActiveName] = useState(false)
    const [activeEmail, setActiveEmail] = useState(false)
    const [activePassword, setActivePassword] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)

            const createUser = await signup(emailRef.current.value, passwordRef.current.value)

            const result = await createUser

            const database = db.collection('users').doc(result.user.uid).collection('userInfo').doc(result.user.uid)

            await database.set({
                name: nameRef.current.value,
                email: emailRef.current.value
            })

            dispatch(setToggleAuthModal(authModal))
            setName('')
            setEmail('')
            setPassword('')

        } catch (error) {
            setError(error.message)
        }

        setLoading(false)

    }


    async function handleFacebookAuth(provider) {
        const createUser = await facebookAuth(provider)


        const result = await createUser
        const database = db.collection('users').doc(result.uid).collection('userInfo').doc(result.uid)

        await database.set({
            name: result.displayName,
            email: result.email
        })

        dispatch(setToggleAuthModal(authModal))
    }


    return (
        <div className={authModal ? 'registerLoginModal open' : 'registerLoginModal'}>
            {registerModal &&
                <>
                    <CloseIcon className='close' onClick={() => {
                        dispatch(setToggleAuthModal(authModal)); 
                        setName('')
                        setEmail('')
                        setPassword('')
                        setError('')
                        setActiveName(false)
                        setActiveEmail(false)
                        setActivePassword(false)
                    }} />

                    <div className='contentColumn'>
                        <h1>Register on Mike's Pizza</h1>

                        <button className='button facebookButton' onClick={() => handleFacebookAuth(facebookProvider)}>
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
                                <PersonOutlineOutlinedIcon />
                                <label className={activeName ? 'active' : ''} htmlFor='name'>Name</label>
                                <input className={activeName ? 'active' : ''} type='text'
                                    onFocus={() => setActiveName(true)}
                                    // do the onBlur only if the value is empty
                                    onBlur={name.length === 0 ? () => setActiveName(false) : () => setActiveName(true)}
                                    ref={nameRef} required value={name} onChange={(e) => setName(e.target.value)}
                                />
                            </div>
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
