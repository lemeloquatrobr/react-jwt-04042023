import apiAxios from "../config/ApiAxios";

const headers = {
    headers: {
        authorization: `Bearer ${localStorage.getItem("auth-token")}`
    }
}

export const getCheckToken = async (token) => {
    const response = await apiAxios.get("/auth/check-token", headers);
    return response.data;
}

export const postSignin = async ({email, password}) => {
    const response = await apiAxios.post("/auth/signin", {email, password});
    return response.data;
}