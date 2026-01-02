import { Navigate } from 'react-router-dom';
import React, { Suspense } from 'react'; 
import Loader from '../components/Loader'; 
const Home = React.lazy(() => import('../pages/Homes')); 

export const RouteList = [
    {
        id: 'home',
        path: '*',
        element: () => <Navigate to="/home" replace />,
    },
      
     {
        id: 'home',  
        path: '/home',
        element: () => (
            <Suspense fallback={<Loader height="calc(100vh - 300px)" />}>
                <Home />
            </Suspense>
        ),
    },
     
];
