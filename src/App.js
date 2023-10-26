import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './customer/Components/NavBar/Navigation';
import CustomerRoutes from './Routers/CustomerRoutes';
//import AdminRoutes from './Routers/AdminRoutes';
import NotFound from './pages/Notfound';
//import AdminPannel from './Admin/AdminPannel';
// import Routers from './Routers/Routers';

function App() {
    const isAdmin=true;
    return (
        <div className="">

            <Routes>
                <Route path="/*" element={<CustomerRoutes />} />
               //

            </Routes>
        </div>
    );
}

export default App;
