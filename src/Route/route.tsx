import { Navigate } from 'react-router-dom';
import React, { Suspense } from 'react'; 
import Loader from '../components/Loader';
  
const MyLibrary = React.lazy(() => import('../pages/MyLibrary')); 
const Home = React.lazy(() => import('../pages/Homes')); 

export const RouteList = [
    {
        id: 'home',
        path: '*',
        element: () => <Navigate to="/home" replace />,
    },
    {
        id: 'my-library',
        path: '/my-library',
        element: () => (
            <Suspense fallback={<Loader />}>
                <MyLibrary />
            </Suspense>
        ),
    }, 
     {
        id: 'home',  
        path: '/home',
        element: () => (
            <Suspense fallback={<Loader />}>
                <Home />
            </Suspense>
        ),
    },
     
];
