import { Navigate } from 'react-router-dom';
import React, { Suspense } from 'react'; 
import Loader from '../components/Loader';

const Product = React.lazy(() => import('../pages/Product')); 
const MyLibrary = React.lazy(() => import('../pages/MyLibrary'));
const AddOrEditSetting = React.lazy(() => import('../pages/AddOrEditSetting'));
const AIInsights = React.lazy(() => import('../pages/AIInsights')); 

export const RouteList = [
    {
        id: 'home',
        path: '*',
        element: () => <Navigate to="/my-library" replace />,
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
        id: 'products',
        path: '/products',
        element: () => (
            <Suspense fallback={<Loader />}>
                <Product />
            </Suspense>
        ),
    },
    {
        id: 'add-or-edit-setting',  
        path: '/add-or-edit-setting',
        element: () => (
            <Suspense fallback={<Loader />}>
                <AddOrEditSetting />
            </Suspense>
        ),
    },
     {
        id: 'ai-insights',  
        path: '/ai-insights',
        element: () => (
            <Suspense fallback={<Loader />}>
                <AIInsights />
            </Suspense>
        ),
    },
     
];
