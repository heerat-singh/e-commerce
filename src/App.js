import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerRoutes from './routers/CustomerRoutes';
import AdminPannel from "./admin/AdminPannel";


function App() {
    const isAdmin=true;
    return (
        <div className="">

            <Routes>
                <Route path="/*" element={<CustomerRoutes />} />
                <Route path="/admin/*" element={<AdminPannel />} />

            </Routes>
        </div>
    );
}

export default App;
