import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Category from '../category/category.component';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategories } from '../../store/categories/category.action';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      // const categoryMap = await getCategoriesAndDocuments();
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;