import { lazy } from 'react';
import Customer from '../pages/Customer/Customer';
import CustomerForm from '../pages/Customer/CustomerForm';

const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Category = lazy(() => import('../pages/Category/Category'));
const CategoryForm = lazy(() => import('../pages/Category/CategoryForm'));

const Product = lazy(() => import('../pages/Product/Product'));
const ProductForm = lazy(() => import('../pages/Product/ProductForm'));

const coreRoutes = [
  {
    path: '/category',
    title: 'Category',
    component: Category,
  },
  {
    path: '/category/create',
    title: 'Category Create',
    component: CategoryForm,
  },
  {
    path: '/category/:id',
    title: 'Category Update',
    component: CategoryForm,
  },
  {
    path: '/product',
    title: 'Product',
    component: Product,
  },
  {
    path: '/product/create',
    title: 'Product Create',
    component: ProductForm,
  },
  {
    path: '/product/:id',
    title: 'Product Update',
    component: ProductForm,
  },
  {
    path: '/customer',
    title: 'Customer',
    component: Customer,
  },
  {
    path: '/customer/create',
    title: 'Create Customer',
    component: CustomerForm,
  },
  {
    path: '/customer/:id',
    title: 'Update Customer',
    component: CustomerForm,
  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
];

const routes = [...coreRoutes];
export default routes;
