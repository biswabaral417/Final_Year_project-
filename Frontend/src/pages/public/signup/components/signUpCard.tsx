import React, { ChangeEvent } from 'react'
import signUp from '../../apis/signUp';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../../provider/AuthProvider';
import InputPassword from '../../../../core/Generics/components/InputPassword';

const SignUpCard: React.FC = () => {
    const { setUser } = useAuth();
    const navigate = useNavigate()
    const inputClassList = 'block bg-white w-[180px] text-xs p-2 px-2 py-1 rounded outline-none'
    const labelClassList = 'block text-sm cursor-pointer text-gray-700'
    const [password, setPassword] = React.useState<string>('')
    const [comfirmPassword, setConfirmPassword] = React.useState<string>('')
    const [userDetails, setUserDetails] = React.useState<{
        firstName: string,
        lastName: string,
        email: string,
        phone: string,
        address: string,
    }>({
        firstName: "",
        lastName: "",
        email: '',
        phone: '',
        address: ''
    })
    const handleDetailsChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserDetails({ ...userDetails, [e.target.id]: e.target.value })
    }

    return (
        <div className='p-6 bg-gray-300 w-fit rounded-[10px] h-fit flex-col '>
            {/* Email or Phone inpyt */}
            <div className='py-2'>
                { /* Names */}
                <div className='flex justify-between gap-2'>
                    <div>
                        <label className={labelClassList} htmlFor="lastName">Last Name</label>
                        <input className={inputClassList}
                            value={userDetails.lastName} onChange={handleDetailsChange}
                            type="text" name="" id="lastName" />
                    </div>

                    <div>
                        <label className={labelClassList} htmlFor="firstName">First Name</label>
                        <input className={inputClassList}
                            value={userDetails.firstName} onChange={handleDetailsChange}
                            type="text" name="" id="firstName" />
                    </div>
                </div>
                <label className={labelClassList} htmlFor="email">Email</label>
                <input className={`${inputClassList} w-full`}
                    value={userDetails.email} onChange={handleDetailsChange}
                    type="text" name="" id="email" />

                {/*address and phone */}
                <div className='flex  justify-between'>
                    <div className=''>
                        <label className={labelClassList} htmlFor="address">address</label>
                        <input className={inputClassList}
                            value={userDetails.address} onChange={handleDetailsChange}
                            type="text" name="" id="address" />
                    </div>
                    <div>
                        <label className={labelClassList} htmlFor="phone">phone</label>
                        <input className={inputClassList}
                            value={userDetails.phone} onChange={handleDetailsChange}
                            type="text" name="" id="phone" />
                    </div>
                </div>
            </div>
            {/* Password input */}
            <div className=' flex gap-2 justify-between'>
                <div>
                    <label className={labelClassList} htmlFor="Password">Password</label>
                    < InputPassword value={password}
                        className={inputClassList}
                        styles={{ Icon: { height: "16px", width: "16px" } }
                        } setter={setPassword}
                    />
                </div>
                <div>

                    <label className={labelClassList} htmlFor="Password">Confirm Password</label>
                    < InputPassword value={comfirmPassword}
                        styles={{ Icon: { height: "16px", width: "16px" } }}
                        className={inputClassList}
                        setter={setConfirmPassword}
                    />
                </div>
            </div>
            {/*Login button */}
            <div className=' py-2 flex'>
                <button className='button-def !w-full !text-center'
                    onClick={() => {
                        signUp({ setUser, navigate });
                    }}>Sign Up</button>
            </div>
            <hr className='bg-gray-600 my-2 border-gray-400' />
            {/*Already have an account */}
            <div className='text-center flex flex-col gap-2'>
                <p className='text-gray-700'>Already have an account ? </p>
                <Link to="/" className='text-blue-600 button-def !bg-green-500'>Log In</Link>
            </div>
        </div>

    )
}

export default SignUpCard