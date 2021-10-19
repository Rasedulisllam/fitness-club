
import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user,IsLoading}=useAuth()
    console.log(IsLoading)
    if(IsLoading){
        return(
            <Spinner animation="border" variant="danger" />
        )
    }

    return (
        <Route
            {...rest}
            render={({location})=>user?.email?children:(
                <Redirect
                    to={{
                        pathname:'/signIn',
                        state:{from:location}
                    }}
                />
            )}
        >
            
        </Route>
    );
};

export default PrivateRoute;