import './Login.css'
import logo from '../../assets/images/bacola-logo.png'
import { useContext, useEffect } from 'react'
import { Mycontext } from '../../App'
import LoginBanner from '../../assets/images/121.jpg';
const Login = () => {
    const context = useContext(Mycontext)

    useEffect(() => {
        context.setIsHideSiderbarAndHeader(true)
    }, [])
    return (
        <>
            <img src={LoginBanner} alt='' className='loginBanner' />
            <section className="loginSection">
                <div className='loginBox'>
                    <div className='logo text-center'>
                        <img src={logo} alt='' width={"130px"} />
                        <h5 className='font-weight-bold pt-3'>Login to Bacola</h5>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Login