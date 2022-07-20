import { Catalog } from "./components/Catalog/Catalog";
import { Create } from "./components/Create/Create";
import { Details } from "./components/Details/Details";
import { Edit } from "./components/Edit/Edit";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";

import { useState } from "react";
import { AuthContext } from "./contexts/AuthContext";

import { Route, Routes, Navigate } from "react-router-dom";
import { FilteredCatalog } from "./components/Catalog/FilteredCatalog/FilteredCatalog";

function App() {

    const initialState = {
        _id: '',
        email: '',
        accessToken: '',
    };

    const [user, setUser] = useState({ ...initialState });

    const login = (authData) => {
        setUser(authData);
    }

    const logout = () => {
        setUser(initialState);

        alert('Successful Logout!')
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            <div className="App">
                <Header />

                <Routes>
                    <Route path="/" element={<Navigate to="/catalog" />} />
                    <Route path="/details/:id/*" element={<Details />} />
                    <Route path="/edit/:id/*" element={<Edit />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/catalog/:filter/*" element={<FilteredCatalog />} />
                    <Route path="/catalog/details/*" element={<Catalog />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/filtered/:filter" element={<Create />} />
                </Routes>

            </div>
        </AuthContext.Provider>
    );
}

export default App;
