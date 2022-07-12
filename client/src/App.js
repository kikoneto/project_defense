import { Catalog } from "./components/Catalog/Catalog";
import { Create } from "./components/Create/Create";
import { Details } from "./components/Details/Details";
import { Edit } from "./components/Edit/Edit";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";

import { Route, Routes, Navigate } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header />

            <Routes>
                <Route path="/details/:id/*" element={<Details />} />
                <Route path="/edit/:id/*" element={<Edit />} />
                <Route path="/catalog/*" element={<Catalog />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/create" element={<Create />} />
            </Routes>

        </div>
    );
}

export default App;
