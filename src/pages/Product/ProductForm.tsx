import { useState, useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const ProductForm = () => {
    const [categories, setCategories] = useState([]);

    const [product, setProduct] = useState({
        name: '',
        model: '',
        description: '',
        categoryId: '',
        image: '',
        thumbnail: '',
        metaKeyword: '',
        metaDescription: '',
    });

    const { id } = useParams();
    const navigate = useNavigate();

    const fetchCategories = async () => {
        try {
            const result = await axios.get(BACKEND_URL + 'category');
            setCategories(result.data);
        } catch (error: any) {
            console.log('Error : ', error.message);
        }
    };

    const onChangeName = (e: any) => {
        setProduct({ ...product, name: e.target.value });
    };

    const onChangeModel = (e: any) => {        
        setProduct({ ...product, model: e.target.value });
    };

    const onChangeCategoryId = (e: any) => {
        setProduct({ ...product, categoryId: e.target.selectedOptions[0].value });
    };

    const onChangeDescription = (e: any) => {
        setProduct({ ...product, description: e.target.value });
    };

    const onChangeImage = (e: any) => {
        setProduct({ ...product, image: e.target.files[0] });
    };

    const onChangeMetaKeyword = (e: any) => {
        setProduct({ ...product, metaKeyword: e.target.value });
    };

    const onChangeMetaDescriptions = (e: any) => {
        setProduct({ ...product, metaDescription: e.target.value });
    };

    const saveProduct = () => {
        const fd = new FormData();
        fd.append('name', product.name);
        fd.append('model', product.model);
        fd.append('description', product.description);
        fd.append('categoryId', product.categoryId);
        fd.append('metaKeyword', product.metaKeyword);
        fd.append('metaDescription', product.metaDescription);
        fd.append('thumbnail', product.thumbnail);
        fd.append('image', product.image);
        if (id) {
            axios
                .patch(BACKEND_URL + 'product/' + id, fd, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                })
                .then((res: any) => {
                    if (res.data.success) {
                        navigate('/product');
                    }
                });
        } else {
            axios.post(BACKEND_URL + 'product/', fd).then((res: any) => {
                if (res.data.success) {
                    navigate('/product');
                }
            });
        }
    };

    const getProduct = () => {
        if (id) {
            axios
                .get(BACKEND_URL + 'product/' + id)
                .then((res: any) => {
                    const product = res.data;
                    setProduct(product);
                })
                .catch((ex) => {
                    console.log('Error : ', ex.message);
                });
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);
    useEffect(() => {
        getProduct();
    }, []);
    return (
        <>
            <Breadcrumb pageName='Product Form' />
            <div className='grid grid-cols-1 gap-9 sm:grid-cols-2'>
                <div className='flex flex-col gap-5.5 p-6.5'>
                    <div>
                        <label className='mb-1 block text-black dark:text-white'>
                            Product Name
                        </label>
                        <input
                            type='text'
                            placeholder='Product Name'
                            className='w-full rounded-lg border-[1.5px] border-primary bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input'
                            value={product.name}
                            onChange={onChangeName}
                        />
                    </div>
                    <div>
                        <label className='mb-1 block text-black dark:text-white'>
                            Model
                        </label>
                        <input
                            type='text'
                            placeholder='Product Model'
                            className='w-full rounded-lg border-[1.5px] border-primary bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input'
                            value={product.model}
                            onChange={onChangeModel}
                        />
                    </div>
                    <div>
                        <label className='mb-1 block text-black dark:text-white'>
                            Description
                        </label>
                        <textarea
                            placeholder='Description'
                            className='w-full rounded-lg border-[1.5px] border-primary bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input'
                            cols={10}
                            value={product.description}
                            onChange={onChangeDescription}
                        ></textarea>
                    </div>

                    <div>
                        <label className='mb-1 block text-black dark:text-white'>
                            Category
                        </label>
                        <select
                            className='w-full rounded-lg border-[1.5px] border-primary bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input'
                            onChange={onChangeCategoryId}
                        >
                            {categories
                                ? categories.map(
                                      (category: any, index: any) => {
                                          return (
                                              <option key={index} value={category._id}>
                                                  {category.name}
                                              </option>
                                          );
                                      }
                                  )
                                : ''}
                        </select>
                    </div>

                    <div>
                        <label className='mb-1 block text-black dark:text-white'>
                            Image
                        </label>
                        <input
                            type='file'
                            className='w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-2 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary'
                            onChange={onChangeImage}
                        />
                    </div>
                    <div>
                        <label className='mb-1 block text-black dark:text-white'>
                            Meta Keywords
                        </label>
                        <input
                            type='text'
                            placeholder='Mata Keywords'
                            className='w-full rounded-lg border-[1.5px] border-primary bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input'
                            value={product.metaKeyword}
                            onChange={onChangeMetaKeyword}
                        />
                    </div>
                    <div>
                        <label className='mb-1 block text-black dark:text-white'>
                            Meta Description
                        </label>
                        <textarea
                            placeholder='Meta Description'
                            className='w-full rounded-lg border-[1.5px] border-primary bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input'
                            cols={10}
                            value={product.metaDescription}
                            onChange={onChangeMetaDescriptions}
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type='button'
                            className='focus:outline-none text-white bg-meta-3 hover:bg-success focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600'
                            onClick={() => saveProduct()}
                        >
                            Save
                        </button>
                        <Link
                            className='focus:outline-none text-white bg-black hover:bg-body focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600'
                            to='/product'
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

export default ProductForm;
