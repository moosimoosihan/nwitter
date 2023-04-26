import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    const onLogOutClick = () => {
        signOut(auth);
        navigate("/", { replace: true });
    };
    return (
        <button onClick={onLogOutClick}>Log Out</button>
    );
};
    
export default MyProfile;