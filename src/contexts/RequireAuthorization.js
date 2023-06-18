import React, {useContext} from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

import {CurrentUserContext} from "contexts/currentUser";

const RequireAuthorization = () => {
    const [currentUserState] = useContext(CurrentUserContext);
    const location = useLocation();

    if (currentUserState.isLoggedIn === false) {
        return <Navigate to='/login' state={{from: location}}/>
    }

    return <Outlet/>
}

export default RequireAuthorization;