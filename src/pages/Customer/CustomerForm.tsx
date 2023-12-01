import { useState, useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const CustomerForm = () => {
    const [customer, setCustomer] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
    });
    // const [confirmPassword, setCConfirmPassword] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    const onChangeFirstName = (e: any) => {
        setCustomer({ ...customer, firstname: e.target.value });
    };

    const onChangeLastName = (e: any) => {
        setCustomer({ ...customer, lastname: e.target.value });
    };

    const onChangeEmail = (e: any) => {
        setCustomer({ ...customer, email: e.target.value });
    };

    const onChangePhone = (e: any) => {
      setCustomer({ ...customer, phone: e.target.value });
  };

    const onChangePassword = (e: any) => {
        setCustomer({ ...customer, password: e.target.value });
    };

    // const onChangeConfirmPassword = (e: any) => {
    //   if ()
    // };

    const saveCustomer = () => {
        if (id) {
            axios
                .patch(BACKEND_URL + 'customer/' + id, customer)
                .then((res: any) => {
                    if (res.data.success) {
                        navigate('/customer');
                    }
                });
        } else {
            axios.post(BACKEND_URL + 'customer/', customer).then((res: any) => {
                if (res.data.success) {
                    navigate('/category');
                }
            });
        }
    };

    const getCustomer = () => {
        if (id) {
            axios
                .get(BACKEND_URL + 'customer/' + id)
                .then((res: any) => {
                    const customer = res.data;
                    setCustomer(customer);
                })
                .catch((ex) => {
                    console.log('Error : ', ex.message);
                });
        }
    };

    useEffect(() => {
        getCustomer();
    }, []);
    return (
        <>
            <Breadcrumb pageName='Category Form' />
            <div className='grid grid-cols-1 gap-9 sm:grid-cols-2'>
                <div className='flex flex-col gap-5.5 p-6.5'>
                    <div>
                        <label className='mb-1 block text-black dark:text-white'>
                            First Name
                        </label>
                        <input
                            type='text'
                            placeholder='First Name'
                            className='w-full rounded-lg border-[1.5px] border-primary bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input'
                            value={customer.firstname}
                            onChange={onChangeFirstName}
                        />
                    </div>
                    <div>
                        <label className='mb-1 block text-black dark:text-white'>
                            Last Name
                        </label>
                        <input
                            type='text'
                            placeholder='Last Name'
                            className='w-full rounded-lg border-[1.5px] border-primary bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input'
                            value={customer.lastname}
                            onChange={onChangeLastName}
                        />
                    </div>
                    <div>
                        <label className='mb-1 block text-black dark:text-white'>
                            Email
                        </label>
                        <input
                            type='text'
                            placeholder='Customer Email'
                            className='w-full rounded-lg border-[1.5px] border-primary bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input'
                            value={customer.email}
                            onChange={onChangeEmail}
                        />
                    </div>
                    <div>
                        <label className='mb-1 block text-black dark:text-white'>
                            Phone
                        </label>
                        <input
                            type='text'
                            placeholder='Customer Email'
                            className='w-full rounded-lg border-[1.5px] border-primary bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input'
                            value={customer.phone}
                            onChange={onChangePhone}
                        />
                    </div>
                    <div>
                        <label className='mb-1 block text-black dark:text-white'>
                            Password
                        </label>
                        <input
                            type='password'
                            placeholder='Customer Email'
                            className='w-full rounded-lg border-[1.5px] border-primary bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input'
                            value={customer.password}
                            onChange={onChangePassword}
                        />
                    </div>

                    <div>
                        <button
                            type='button'
                            className='focus:outline-none text-white bg-meta-3 hover:bg-success focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600'
                            onClick={() => saveCustomer()}
                        >
                            Save
                        </button>
                        <Link
                            className='focus:outline-none text-white bg-black hover:bg-body focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600'
                            to='/customer'
                        >
                            {' '}
                            Cancel{' '}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomerForm;
