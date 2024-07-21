import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegEnvelope, FaGoogle } from 'react-icons/fa';
import { MdLockOutline, MdVisibility, MdVisibilityOff } from 'react-icons/md'; // Import of icons
import playerLoginpic from '../components/images/playerlogin.png'; // Import of images
import '../components/css/login.css'; // Ensure your CSS file is imported

const Playerlogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const [error, setError] = useState('');
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        setAnimation(true);
    }, []);

    const handleSignIn = (e) => {
        e.preventDefault();
        // Add validation logic
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }
        // Add authentication logic
        if (email === 'your@email.com' && password === 'yourpassword') {
            // Redirect to dashboard of player profile
            window.location.href = '/dashboard';
        } else {
            setError('Invalid email or password.');
        }
    };

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 ${animation ? 'fade-in active' : ''}`}>
            <main className="flex flex-col items-center justify-center w-full h-full px-20 text-center ">
                <div className='bg-white rounded-2xl shadow-2xl flex w-full max-w-4xl maindiv'>
                    {/* Right side */}
                    <div className='w-full md:w-3/5 p-5 leftdiv'>
                        <div className='text-left font-bold'>
                            <span className='text-green-500'> Smart</span>Cricket
                        </div>
                        <div className='py-10'>
                            <h2 className='text-3xl font-bold text-green-500 mb-2'>Player Login</h2>
                            <div className='border-2 w-52 border-green-500 inline-block mb-2'></div>
                        </div>

                        <form onSubmit={handleSignIn}>
                            <div className='flex flex-col items-center'>
                                {/* Email input field with icon */}
                                <div className='bg-gray-100 w-full md:w-80 p-2 flex items-center mb-3 rounded-lg input-container'>
                                    <FaRegEnvelope className="text-gray-400 m-2" />
                                    <input
                                        required
                                        type='email'
                                        name='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder='Enter your Email Address'
                                        className='bg-gray-100 outline-none text-sm flex-1 rounded-lg input-field'
                                    />
                                </div>

                                {/* Password input field with icon and toggle */}
                                <div className='bg-gray-100 w-full md:w-80 p-2 flex items-center mb-3 rounded-lg input-container'>
                                    <MdLockOutline className="text-gray-400 m-2" />
                                    <div className="relative flex-1">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name='password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder='Enter your Password'
                                            className='bg-gray-100 outline-none text-sm w-full rounded-lg input-field pr-10'
                                        />
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 px-3 flex items-center"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                                        </button>
                                    </div>
                                </div>

                                {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

                                <div className='flex justify-between w-full md:w-64 mb-5'>
                                    <label className='flex items-center text-xs'>
                                        <input type='checkbox' name='remember' className='mr-1' /> Remember me
                                    </label>
                                    <Link to='/forget'>
                                        <a href='#' className='text-xs'>Forgot Password?</a>
                                    </Link>
                                </div>

                                <button
                                    type="submit"
                                    className='border-2 border-green-500 text-green-500 rounded-lg px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white transition-all duration-300'
                                >
                                    Sign In
                                </button>

                                <div className="mt-4">
                                    <p className="text-sm">Don't have an account? <Link to="/PlayerSignup" className="text-green-500">Sign Up</Link></p>
                                </div>
                            </div>
                            
                            <div className="flex justify-center flex-col items-center">
                                <button className="flex items-center border-2 border-green-500 rounded-lg px-6 py-2 mt-6 font-semibold hover:bg-green-500 hover:text-white">
                                    <FaGoogle className="text-orange-500 mr-2" /> {/* Google icon */}
                                    Login with Google
                                </button>
                            </div>
                        </form>
                    </div>
                    
                    {/* Left side */}
                    <div className=' w-full md:w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-8 md:py-36 px-4 md:px-12 flex flex-col justify-center items-center'>
                        <h2 className='text-3xl font-bold mb-2'>SmartCricket</h2>
                        <div className='border-2 w-10 border-white inline-block mb-2'></div>
                        <img src={playerLoginpic} alt="Cricket Image" className="w-60 h-60 mb-4" />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Playerlogin;
