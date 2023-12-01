import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Customer = () => {
    const navigate = useNavigate();
    const [customers, setCustomers] = useState([]);
    
    const fetchCustomers = async () => {
        try {
            const result = await axios.get(BACKEND_URL + 'customer');
            setCustomers(result.data);
        } catch (error: any) {
            console.log('Error : ', error.message);
        }
    };

    useEffect(() => {
      fetchCustomers();
    }, []);

    const editCustomer = (id: any) => {
        navigate('/customer/' + id);
    };
    
    return (
        <>
            <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
                <div className='py-6 px-4 md:px-6 xl:px-7.5'>
                    <h4 className='text-xl font-semibold text-black dark:text-white'>
                        Customers
                        <Link
                            to='/customer/create'
                            className='focus:outline-none text-white bg-primary hover:bg-success focus:ring-4 focus:ring-green-300 font-medium rounded-lg float-right text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600'
                        >
                            Add Customer
                        </Link>
                    </h4>
                </div>

                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                            <tr>
                                <th scope='col' className='px-6 py-3'>
                                    First Name
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Last Name
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Email
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Phone
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.length ? (
                                customers.map((customer: any, i: any) => {
                                    return (
                                        <tr
                                            key={i}
                                            className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
                                        >
                                            <th
                                                scope='row'
                                                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                                            >
                                              
                                                {customer.firstname}
                                            </th>
                                            <td className='px-6 py-4'>
                                                {customer.lastname}
                                            </td>
                                            <td className='px-6 py-4'>
                                                {customer.email}
                                            </td>
                                            <td className='px-6 py-4'>
                                                {customer.phone}
                                            </td>
                                            <td className='px-6 py-4'>
                                                <button
                                                    className='bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                                                    onClick={() =>
                                                        editCustomer(
                                                            customer._id
                                                        )
                                                    }
                                                >
                                                    Edit
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <p className='text-center'>Not customer found</p>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Customer;
