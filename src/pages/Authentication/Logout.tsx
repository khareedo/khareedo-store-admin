import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import KhareedoStoreLogo from '../../images/logo/Khareedo-Store-Logo.png';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Logout = () => {
    const navigate = useNavigate();

    const logOut = () => {
        const token = localStorage.getItem('token');
        axios
            .post(BACKEND_URL + 'user/logout', { token })
            .then((res: any) => {                
                // if (res.data.id) {
                //     navigate('/');
                // }
            });
    };

    useEffect(() => {
        logOut();
    });
    
    return (
        <>
            <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
                <div className='flex flex-wrap items-center'>
                    <div className='hidden w-full xl:block xl:w-1/2'>
                        <div className='py-17.5 px-26 text-center'>
                            <img
                                className='hidden dark:block rounded-50'
                                src={KhareedoStoreLogo}
                                alt='Logo'
                            />
                            <img
                                className='dark:hidden rounded-50'
                                src={KhareedoStoreLogo}
                                alt='Logo'
                            />
                            <p className='2xl:px-20'>Khareedo Store Tagline.</p>
                        </div>
                    </div>

                    <div className='w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2'>
                        <div className='w-full p-4 sm:p-12.5 xl:p-17.5'>
                            <h2 className='mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2'>
                                You have been logged out, <Link className='text-primary' to="/signin">Sign In</Link> to Khareedo Store
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Logout;
