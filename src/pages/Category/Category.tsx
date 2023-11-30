import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Category = () => {
  const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const ProductOne =
        'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg';
    const fetchCategories = async () => {
        try {
            const result = await axios.get(BACKEND_URL + 'category');
            setCategories(result.data);
        } catch (error: any) {
            console.log('Error : ', error.message);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const editCategory = (id:any) => {
      navigate('/category/' + id);
    }

    return (
        <>
        <Breadcrumb pageName="Category" />
        <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
            <div className='py-6 px-4 md:px-6 xl:px-7.5'>
                <h4 className='text-xl font-semibold text-black dark:text-white'>
                    Top Products
                </h4>
            </div>

            <div className='grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5'>
                <div className='col-span-3 flex items-center'>
                    <p className='font-medium'>Category Name</p>
                </div>
                <div className='col-span-2 hidden items-center sm:flex'>
                    <p className='font-medium'>Parent</p>
                </div>
                <div className='col-span-1 flex items-center'>
                    <p className='font-medium'>Action</p>
                </div>
            </div>
            {categories.length ? (
                categories.map((category:any) => {
                    return (
                        <div className='grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5'>
                            <div className='col-span-3 flex items-center'>
                                <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
                                    <div className='h-12.5 w-15 rounded-md'>
                                        <img
                                            className='thumb'
                                            src={ProductOne}
                                            alt='Product'
                                        />
                                    </div>
                                    <p className='text-sm text-black dark:text-white'>
                                        {category.name}
                                    </p>
                                </div>
                            </div>
                            <div className='col-span-2 hidden items-center sm:flex'>
                                <p className='text-sm text-black dark:text-white'>
                                Parent
                                </p>
                            </div>
                            <div className='col-span-1 flex items-center'>
                            <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => editCategory(category._id)}>Edit</button>
                            </div>
                        </div>
                    );
                })
            ) : (
                <p>Not category found</p>
            )}
        </div>
        </>
    );
};

export default Category;
