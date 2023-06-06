import React, {useEffect, useState} from "react";
import Loading from "./Loading";
import Pages from "../Pages";
import Signin from "./Signin";
import LoadError from "./LoadError";
import * as AuthService from "../services/AuthService";

export default function Auth() {
    const [swichToken, setSwichToken] = useState(1);
    const [authToken, setAuthToken] = useState("");
    const [statusError, setStatusError] = useState("");

    useEffect(() => {
        const localToken = localStorage.getItem("auth-token");
        setAuthToken(localToken);
        checkToken(localToken);
    }, []);

    const checkToken = async (token) => {
        try {
            const {statusToken, statusError} = await AuthService.getCheckToken(token);
            if (statusToken) {
                setSwichToken(2);
            } else {
                setSwichToken(3);
                setStatusError(statusError);
            }
        } catch (error) {
            console.error(error);
            setSwichToken(4);
        }
    }

    if (swichToken === 1) {
        return <Loading />
    } else if (swichToken === 2) {
        return <Pages />
    } else if (swichToken === 3) {
        return <Signin />
    } else if (swichToken === 4) {
        return <LoadError />
    }
}