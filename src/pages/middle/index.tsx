import React, { useEffect } from "react";
import {
    MainWrapper 
} from "../settings/settings.style";
import { useNavigate } from "react-router-dom";


const MiddlePage = (props:any) => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate('/home'), 1000)
    }, [])

    return (
        <MainWrapper>
        </MainWrapper>
    )
}

export default MiddlePage;