import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Product = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [deleteAction, setDeleteAction] = useState(false);
    const [productId, setProductId] = useState(null);
    const ProductOne =
        'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg';
    const fetchProducts = async () => {
        try {
            const result = await axios.get(BACKEND_URL + 'product');
            setProducts(result.data);
        } catch (error: any) {
            console.log('Error : ', error.message);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const editProduct = (id: any) => {
        navigate('/product/' + id);
    };

    const onClickDelete = (id: any) => {
        setProductId(id);
        setDeleteAction(true);
    };

    const deleteProduct = async () => {
        await axios.delete(BACKEND_URL + 'product/' + productId);
        fetchProducts();
    }
    
    return (
        <>
            {deleteAction ? (
                <div
                    className='relative z-10'
                    aria-labelledby='modal-title'
                    role='dialog'
                    aria-modal='true'
                >
                    <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>

                    <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
                        <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
                            <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                                <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                                    <div className='sm:flex sm:items-start'>
                                        <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
                                            <svg
                                                className='h-6 w-6 text-red-600'
                                                fill='none'
                                                viewBox='0 0 24 24'
                                                stroke-width='1.5'
                                                stroke='currentColor'
                                                aria-hidden='true'
                                            >
                                                <path
                                                    stroke-linecap='round'
                                                    stroke-linejoin='round'
                                                    d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
                                                />
                                            </svg>
                                        </div>
                                        <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
                                            <h3
                                                className='text-base font-semibold leading-6 text-gray-900'
                                                id='modal-title'
                                            >
                                                Are you sure?
                                            </h3>
                                            <div className='mt-2'>
                                                <p className='text-sm text-gray-500'>
                                                    Are you sure you want to
                                                    delete this product? All
                                                    of product data will be
                                                    permanently removed. This
                                                    action cannot be undone.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                                    <button
                                        type='button'
                                        className='bg-danger hover:bg-danger text-white font-bold py-2 px-4 rounded mr-2'
                                        onClick={() => deleteProduct()}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        type='button'
                                        className='mt-3 mr-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
                                        onClick={() => setDeleteAction(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                ''
            )}
            <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
                <div className='py-6 px-4 md:px-6 xl:px-7.5'>
                    <h4 className='text-xl font-semibold text-black dark:text-white'>
                        Product
                        <Link
                            to='/product/create'
                            className='focus:outline-none text-white bg-primary hover:bg-success focus:ring-4 focus:ring-green-300 font-medium rounded-lg float-right text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600'
                        >
                            Create New
                        </Link>
                    </h4>
                </div>

                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                            <tr>
                                <th scope='col' className='px-6 py-3'>
                                    Product Name
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Description
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Meta Keywords
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.length ? (
                                products.map((product: any, i: any) => {
                                    return (
                                        <tr
                                            key={i}
                                            className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
                                        >
                                            <th
                                                scope='row'
                                                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                                            >
                                                <div className='h-12.5 w-15 rounded-md'>
                                                    <img
                                                        className='thumb'
                                                        src={product.thumbnail ? BACKEND_URL + product.thumbnail : ProductOne}
                                                        alt='Product'
                                                    />
                                                </div>
                                                {product.name}
                                            </th>
                                            <td className='px-6 py-4'>
                                                {product.description}
                                            </td>
                                            <td className='px-6 py-4'>
                                                {product.metaKeyword}
                                            </td>
                                            <td className='px-6 py-4'>
                                                <button
                                                    className='bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                                                    onClick={() =>
                                                        editProduct(
                                                            product._id
                                                        )
                                                    }
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className='bg-danger hover:bg-danger text-white font-bold py-2 px-4 rounded ml-3'
                                                    onClick={() =>
                                                        onClickDelete(
                                                            product._id
                                                        )
                                                    }
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <p>Not category found</p>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Product;
