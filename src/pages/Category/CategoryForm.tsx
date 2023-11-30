import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
const CategoryForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState();
  const [metaKeywords, setMetaKeywords] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  
  const onChangeName = (e:any) => {
    const name = e.target.value;
    setName(name);
  }

  const onChangeDescription = (e:any) => {
    const description = e.target.value;
    setDescription(description);
  }

  const onChangeImage = (e:any) => {
    const image = e.target.files[0];
    setImage(image);
  }

  const onChangeMetaKeywords = (e:any) => {
    const keyword = e.target.value;
    setMetaKeywords(keyword);
  }

  const onChangeMetaDescriptions = (e:any) => {
    const description = e.target.value;
    setMetaDescription(description);
  }

  const saveCategory = () => {
    console.log('govinda mandal')
  }
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
                            value={name}
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
                            onChange={onChangeDescription}
                        >{ description }</textarea>
                    </div>
                    <div>
                        <label className='mb-1 block text-black dark:text-white'>
                            Image
                        </label>
                        <input
                            type='file'
                            className='w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-2 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary'
                            value={image}
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
                            value={metaKeywords}
                            onChange={onChangeMetaKeywords}
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
                            onChange={onChangeMetaDescriptions}
                        >{ metaDescription }</textarea>
                    </div>
                    <div>
                      <button type="button" className="focus:outline-none text-white bg-meta-3 hover:bg-success focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600">
                        Save
                      </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoryForm;
