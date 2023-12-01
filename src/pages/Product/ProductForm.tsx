import { useState, useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const CategoryForm = () => {
    const [category, setCategory] = useState({
        name: '',
        description: '',
        image: '',
        thumbnail: '',
        metaKeyword: '',
        metaDescription: '',
    });
    const { id } = useParams();
    const navigate = useNavigate();

    const onChangeName = (e: any) => {
        setCategory({ ...category, name: e.target.value });
    };

    const onChangeDescription = (e: any) => {
        setCategory({ ...category, description: e.target.value });
    };

    const onChangeImage = (e: any) => {
        setCategory({ ...category, image: e.target.files[0] });
    };

    const onChangeMetaKeyword = (e: any) => {
        setCategory({ ...category, metaKeyword: e.target.value });
    };

    const onChangeMetaDescriptions = (e: any) => {
        setCategory({ ...category, metaDescription: e.target.value });
    };

    const saveCategory = () => {
        console.log('category ', category);
        
        const fd = new FormData();
        fd.append('name', category.name);
        fd.append('description', category.description);
        fd.append('metaKeyword', category.metaKeyword);
        fd.append('metaDescription', category.metaDescription);
        fd.append('thumbnail', category.thumbnail);
        fd.append('image', category.image);
        if (id) {
            axios
                .patch(BACKEND_URL + 'category/' + id, fd, {
                    headers: {'Content-Type': 'multipart/form-data' }
                })
                .then((res: any) => {
                    if (res.data.success) {
                        navigate('/category');
                    }
                });
        } else {
            axios.post(BACKEND_URL + 'category/', fd).then((res: any) => {
                if (res.data.success) {
                    navigate('/category');
                }
            });
        }
    };

    const getCategory = () => {
        if (id) {
            axios
                .get(BACKEND_URL + 'category/' + id)
                .then((res: any) => {
                    const category = res.data;
                    setCategory(category);
                })
                .catch((ex) => {
                    console.log('Error : ', ex.message);
                });
        }
    };

    useEffect(() => {
        getCategory();
    }, []);
    return (
        <>
            <Breadcrumb pageName='Category Form' />
            <div className='grid grid-cols-1 gap-9 sm:grid-cols-2'>
                <div className='flex flex-col gap-5.5 p-6.5'>
                    <div>
                        <label className='mb-1 block text-black dark:text-white'>
                            Category Name
                        </label>
                        <input
                            type='text'
                            placeholder='Category Name'
                            className='w-full rounded-lg border-[1.5px] border-primary bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input'
                            value={category.name}
                            onChange={onChangeName}
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
                            value={category.description}
                            onChange={onChangeDescription}
                        ></textarea>
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
                            value={category.metaKeyword}
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
                            value={category.metaDescription}
                            onChange={onChangeMetaDescriptions}
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type='button'
                            className='focus:outline-none text-white bg-meta-3 hover:bg-success focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600'
                            onClick={() => saveCategory()}
                        >
                            Save
                        </button>
                        <Link
                            className='focus:outline-none text-white bg-black hover:bg-body focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600'
                            to='/category'
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

export default CategoryForm;
