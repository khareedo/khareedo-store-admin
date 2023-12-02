import { useState, useEffect } from 'react';
import axios from 'axios';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function CategoryOptions() {
  const [categories, setCategories] = useState<string[]>([]);
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
    return (
        <>
          {categories.length ?
          <select>
            {categories.map((category: any, index: any) => {
                      <option key={index} value={category._id}>
                          {category.name}
                      </option>;
                  })}
            </select> :''   
          }              
        </>
    );
}

export default CategoryOptions;
