import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaRegEnvelope } from 'react-icons/fa';
import forget from '../images/forget.png';
import '../css/signup.css';

const Forget = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleResetPassword = () => {
        // Perform any validation or API call here if needed
        navigate('/twofactor'); 
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2     '>
            <main className="flex flex-col items-center justify-center w-full h-full px-4 md:px-20 text-center">
                <div className='bg-white rounded-2xl shadow-2xl flex w-full max-w-4xl maindiv'>
                    {/* Left side */}
                    <div className='w-full md:w-2/5 bg-green-500 text-white rounded-tl-2xl rounded-bl-2xl py-8 md:py-16 px-4 md:px-12 flex flex-col items-center'>
                        <h2 className='text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold mb-2'>SmartCricket</h2>
                        <img src={forget} alt="Forget Image" className="w-40 md:w-56 lg:w-72 xl:w-96 h-40 md:h-56 lg:h-72 xl:h-96 mb-4" />
                    </div>
                    {/* Right side */}
                    <div className='w-full md:w-3/5 p-5'>
                        <div className='text-right font-bold text-xs md:text-sm lg:text-base xl:text-lg'>
                            <span className='text-green-500'> Smart</span>Cricket
                        </div>
                        <div className='py-10'>
                            <h2 className='text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-green-500 mb-2'>Forget Your Password</h2>
                            <div className='border-2 border-green-500 inline-block mb-2 w-40 md:w-52 lg:w-72 xl:w-80'></div>
                        </div>
                        <div className='flex justify-center'>
                            <div className='bg-gray-100 w-full md:w-80 p-2 flex items-center mb-4 rounded-lg input-container'>
                                <FaRegEnvelope className="text-gray-400 m-2 text-xs md:text-sm lg:text-md xl:text-md" />
                                <input
                                    required
                                    type='email'
                                    name='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Enter your Email Id'
                                    className='bg-gray-100 outline-none text-xs md:text-sm lg:text-md xl:text-md flex-1 p-2 rounded-lg input-field'
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center my-4">
                            <button 
                                onClick={handleResetPassword} 
                                className="flex items-center align-center border-2 border-green-500 rounded-lg px-6 py-2 font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 text-xs md:text-sm lg:text-base xl:text-base"
                            >
                                Reset Password
                            </button>
                            <div className="mt-4">
                                <p className="text-xs md:text-sm lg:text-base xl:text-base">Back to login <Link to="/login" className="text-green-500">Sign In</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Forget;
