import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Login from './component/login';
import Register from './component/Register';
import SupplierList from './component/SupplierList';
import InsertSupplier from './component/InsertSupplier';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowDetails from './component/ShowDetails';
import UpdateSupplier from './component/UpdateSupplier';
import SupDetails from './component/SupDetails';  
import Dashboard from './component/Dashboard';
import Order from './component/order';
import PlaceOrder from './component/PlaceOder';
import OrderForm from './component/OrderForm';
import OrdersTable from './component/OrdersTable';

function App() {
  return (
    <Router>
      <div className="content-container">
        <Routes>
           <Route path="/" element={<Home />} />
          <Route path='/login' element={<div className="content-container"><Login/></div>} />
          <Route path='/register' element={<div className="content-container"><Register/></div>} />
          <Route path='/supdetails/:id' element={<div className="content-container"><SupDetails/></div>} />
          <Route path='/supplierlist' element={<div className="content-container"><SupplierList/></div>} />
          <Route path='/insert' element={<div className="content-container"><InsertSupplier/></div>} />
          <Route path='/showdetails/:id' element={<div className="content-container"><ShowDetails/></div>} />
          <Route path='/updatedetails/:id' element={<div className="content-container"><UpdateSupplier/></div>} />
          <Route path="/dashboard" element={<div className="content-container"><Dashboard/></div>} />
          <Route path="/place-order" element={<div className="content-container"><PlaceOrder/></div>} />
          <Route path="/order" element={<div className="content-container"><Order/></div>} />
          <Route path="/order-form" element={<div className="content-container"><OrderForm/></div>} />
          <Route path="/ordertable" element={<div className="content-container"><OrdersTable/></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
