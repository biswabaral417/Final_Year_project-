import React from 'react'
import login from '../../apis/login';
import useAuth from '../../../../provider/AuthProvider';
import InputPassword from '../../../../core/Generics/components/InputPassword';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const LoginCard: React.FC = () => {
    const navigate = useNavigate()
    const { setUser } = useAuth();
    const inputClassList = 'block bg-white text-2xl w-full p-2 px-2 py-1 rounded outline-none'
    const labelClassList = 'block text-2xl cursor-pointer text-gray-700'
    const [password, setPassword] = React.useState<string>('')
    const [emailOrPhone, setEmailOrPhone] = React.useState<string>('')

    return (
        <div className='p-6 bg-gray-300 w-fit rounded-[10px] h-fit '>
            {/* Email or Phone inpyt */}
            <div className='p-2'>
                <label className={labelClassList} htmlFor="Email_or_Phone">Email or Phone</label>
                <input className={inputClassList}
                    value={emailOrPhone} onChange={(e) => setEmailOrPhone(e.target.value)}
                    type="text" name="" id="Email_or_Phone" />
            </div>
            {/* Password input */}
            <div className='p-2  '>
                <label className={labelClassList} htmlFor="Password">Password</label>
                < InputPassword value={password} className={inputClassList} setter={setPassword} />
            </div>
            {/*Login button */}
            <div className='p-2 flex'>
                <button className='button-def !w-full !text-center'
                    onClick={() => {
                        login({ setUser, navigate });
                    }}>Login</button>
            </div>
            {/*forgot password */}
            <div className='text-center'>
                <Link to="/forgot_password" className='text-blue-600'>Forgot Password?</Link>
            </div>
            <hr className='bg-gray-600 my-2 border-gray-400' />
            {/*Already have an account */}
            <div className='text-center p-2 flex flex-col gap-2'>
                <p className='text-gray-700'>Don't have an account? </p>
                <Link to="signup" className='text-blue-600 button-def !bg-green-500'>Create a new account</Link>
            </div>
        </div>

    )
}

export default LoginCard