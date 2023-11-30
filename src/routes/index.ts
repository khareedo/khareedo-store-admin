import { lazy } from 'react';

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
    path: '/category/:id',
    title: 'Category',
    component: CategoryForm,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
];

const routes = [...coreRoutes];
export default routes;
