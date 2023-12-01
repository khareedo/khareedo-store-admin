import { lazy } from 'react';
import Customer from '../pages/Customer/Customer';
import CustomerForm from '../pages/Customer/CustomerForm';

const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const SignIn = lazy(() => import('../pages/Authentication/SignIn'));
const SignUp = lazy(() => import('../pages/Authentication/SignUp'));
const Category = lazy(() => import('../pages/Category/Category'));
const CategoryForm = lazy(() => import('../pages/Category/CategoryForm'));

const coreRoutes = [
  {
    path: '/signin',
    title: 'Sign In',
    component: SignIn,
  },
  {
    path: '/signup',
    title: 'Sign Up',
    component: SignUp,
  },
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
];

const routes = [...coreRoutes];
export default routes;
