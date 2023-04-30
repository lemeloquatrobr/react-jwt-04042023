import React from "react";
//yarn add react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/users/UserList";

export default function Pages() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/user-list" element={<UserList />} />
            </Routes>
        </BrowserRouter>
    )
}