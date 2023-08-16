import React from "react";
//yarn add react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/users/UserList";
import Navbar from "./config/navbar/Navbar";
import Home from "./pages/Home";
import UserForm from "./pages/users/UserForm";
import CredentialForm from "./pages/credentials/CredentialForm";
import UserShow from "./pages/users/UserShow";
import ClinicList from "./pages/clinics/ClinicList";

export default function Pages() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/user-list" element={<UserList />} />
                <Route exact path="/user-form" element={<UserForm />} />
                <Route exact path="/user-show" element={<UserShow />} />
                <Route exact path="/credential-form" element={<CredentialForm />} />
                <Route exact path="/clinic-list" element={<ClinicList />} />
            </Routes>
        </BrowserRouter>
    )
}