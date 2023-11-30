import { lazy } from 'react';

const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const SignIn = lazy(() => import('../pages/Authentication/SignIn'));
const SignUp = lazy(() => import('../pages/Authentication/SignUp'));

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
