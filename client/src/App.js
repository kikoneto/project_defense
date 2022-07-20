import { Catalog } from "./components/Catalog/Catalog";
import { Create } from "./components/Create/Create";
import { Details } from "./components/Details/Details";
import { Edit } from "./components/Edit/Edit";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { FilteredCatalog } from "./components/Catalog/FilteredCatalog/FilteredCatalog";
import { MyNews } from "./components/MyNews/MyNews";

import { AuthContext } from "./contexts/AuthContext";

import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";


function App() {

    const initialState = {
        _id: '',
        email: '',
        gender: '',
        username: '',
        password: '',
        avatarUrl: '',
        accessToken: '',
    };

    const [user, setUser] = useState({ ...initialState });

    const navigate = useNavigate();

    const login = (authData) => {
        setUser(authData);

        navigate('/catalog', { replace: true });
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
                    <Route path="/catalog/details/*" element={<Catalog />} />
                    <Route path="/catalog/:filter/*" element={<FilteredCatalog />} />
                    <Route path="/filtered/:filter" element={<Create />} />
                    <Route path="/details/:id/*" element={<Details />} />
                    <Route path="/edit/:id/*" element={<Edit />} />
                    <Route path="/catalog/*" element={<Catalog />} />
                    <Route path="/mynews/*" element={<MyNews />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/create" element={<Create />} />
                </Routes>

            </div>
        </AuthContext.Provider>
    );
}

export default App;
