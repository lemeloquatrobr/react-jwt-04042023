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
import ClinicForm from "./pages/clinics/ClinicForm";
import ExpertiseList from "./pages/expertises/ExpertiseList";
import ExpertiseForm from "./pages/expertises/ExpertiseForm";
import ExpertList from "./pages/experts /ExpertList";
import ExpertForm from "./pages/experts /ExpertForm";

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
                <Route exact path="/clinic-form" element={<ClinicForm />} />
                <Route exact path="/expertise-list" element={<ExpertiseList />} />
                <Route exact path="/expertise-form" element={<ExpertiseForm />} />
                <Route exact path="/expert-list" element={<ExpertList />} />
                <Route exact path="/expert-form" element={<ExpertForm />} />
            </Routes>
        </BrowserRouter>
    )
}